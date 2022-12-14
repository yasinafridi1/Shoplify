const Joi = require("joi");
const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const JwtService = require("../../../../services/jwtService");
const RefreshModel = require('../../../models/RefreshModel');
const userDto = require("../../../../services/userDto");

function authcontroller() {
    return {
        login: async (req, res) => {
            const loginSchema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,15}$')).required()
            })

            const { error } = loginSchema.validate(req.body);
            if (error) {
                return res.status(422).json({ message: error.message });
            }

            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(422).json({ message: 'Email or password incorrect' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Email or password incorrect' });
            }
            const { accessToken, refreshToken } = JwtService.generateToken({ _id: user._id, role: user.role });


            const { result } = await JwtService.storeRefreshToken(refreshToken, user._id);
            if (!result) {
                return res.status(500).json({ message: 'Internal server error.Cannot store refresh token' });
            }

            res.cookie('refreshtoken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 30,  // 30 days
                httpOnly: true
            })
            res.cookie('accesstoken', accessToken, {
                maxAge: 1000 * 60 * 60, // 1 hour
                httpOnly: true
            })

            const userdata = userDto(user);
            return res.json({ userdata, accessToken });
        },

        register: async (req, res) => {
            console.log(req.body);
            const registerSchema = Joi.object({
                fullName: Joi.string().required(),
                phone: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,15}$')).required(),
                confirmPassword: Joi.ref('password')
            })
            const { error } = registerSchema.validate(req.body);
            if (error) {
                return res.status(422).json({ message: error.message });
            }
            const { fullName, email, password, confirmPassword } = req.body;
            const user = await User.exists({ email });
            if (user) {
                return res.status(409).json({ message: 'Email already registered' });
            }

            if (!fullName || !email || !password || !confirmPassword) {
                return res.status(422).json({ message: 'All fields are required' });
            }
            if (password !== confirmPassword) {
                return res.status(422).json({ message: 'Password not matching' });
            }
            try {

                const hashedPassword = await bcrypt.hash(password, 12);

                const newUser = new User({
                    fullName,
                    email,
                    password: hashedPassword
                });

                const isSaved = await newUser.save();
                if (!isSaved) {
                    return res.status(500).json({ message: 'Internal server error.Could not register user' });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error.Please try again' })
            }

            return res.json({ message: 'All ok' });

        },

        logout: async (req, res) => {
            try {
                const token = await RefreshModel.findOneAndRemove({ userId: req.user._id });
                if (!token) {
                    return res.status(422).json({ message: 'Token not found' });
                }
                res.clearCookie('accesstoken');
                res.clearCookie('refreshtoken');
            } catch (err) {
                return res.status(500).json({ message: err.message });
            }
            return res.json({ message: 'Logout successfully' });
        }
    }
}


module.exports = authcontroller;