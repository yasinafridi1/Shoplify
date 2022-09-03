const Joi = require("joi");
const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const JwtService = require("../../../../services/jwtService");

function authcontroller() {
    return {
        login: async (req, res) => {
            const loginSchema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,15}$')).required()
            })

            const { error } = loginSchema.validate(req.body);
            if (error) {
                return res.status(401).json({ msg: error.message });
            }

            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ msg: 'Email not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ msg: 'Email or password incorrect' });
            }
            const { accessToken, refreshToken } = JwtService.generateToken({ _id: user._id, role: user.role });


            const { result } = await JwtService.storeRefreshToken(refreshToken, user._id);
            if (!result) {
                return res.status(500).json({ msg: 'Internal server error.Cannot store refresh token' });
            }

            res.cookie('refreshtoken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 30,  // 30 days
                httpOnly: true
            })
            res.cookie('accesstoken', accessToken, {
                maxAge: 1000 * 60 * 60, // 1 hour
                httpOnly: true
            })

            return res.json({ user });
        },

        register: async (req, res) => {
            const registerSchema = Joi.object({
                fullName: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,15}$')).required(),
                confirmPassword: Joi.ref('password')
            })
            const { error } = registerSchema.validate(req.body);
            if (error) {
                return res.status(401).json({ msg: error.message });
            }
            const { fullName, email, password, confirmPassword } = req.body;
            const user = await User.exists({ email });
            if (user) {
                return res.status(400).json({ msg: 'Email already registered' });
            }

            if (!fullName || !email || !password || !confirmPassword) {
                return res.status(400).json({ msg: 'All fields are required' });
            }
            if (password !== confirmPassword) {
                return res.status(400).json({ msg: 'Password not matching' });
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
                    return res.status(500).json({ msg: 'Internal server error.Could not register user' });
                }

                const { accessToken, refreshToken } = JwtService.generateToken({ _id: isSaved._id, role: isSaved.role });
                const { result } = await JwtService.storeRefreshToken(refreshToken, isSaved._id);
                if (!result) {
                    return res.status(500).json({ msg: 'Internal server error.Could not register refresh token' });

                }
                res.cookie('refreshtoken', refreshToken, {
                    maxAge: 1000 * 60 * 60 * 24 * 30,  // 30 days
                    httpOnly: true
                })
                res.cookie('accesstoken', accessToken, {
                    maxAge: 1000 * 60 * 60, // 1 hour
                    httpOnly: true
                })

                return res.json({ accessToken });

            } catch (error) {
                return res.status(500).json({ msg: error.message })
            }
        }
    }
}


module.exports = authcontroller;