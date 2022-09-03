const express = require('express');
const authcontroller = require('../app/https/controllers/authController/authcontroller');
const allProduct = require('../app/https/controllers/productController/allProduct');
const insertProduct = require('../app/https/controllers/productController/insertProduct');
const admin = require('../app/https/middleware/admin');
const auth = require('../app/https/middleware/auth');


const Router = express.Router();

Router.post('/login', authcontroller().login);
Router.post('/register', authcontroller().register);
Router.get('/allProduct', allProduct().getProduct);
Router.post('/addProduct', [auth, admin], insertProduct().addProduct);
Router.get('/:_id', allProduct().singleProduct);

module.exports = Router;