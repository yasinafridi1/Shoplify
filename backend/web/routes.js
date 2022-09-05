const express = require('express');
const authcontroller = require('../app/https/controllers/authController/authcontroller');
const allProduct = require('../app/https/controllers/productController/allProduct');
const cartProduct = require('../app/https/controllers/productController/cartProduct');
const deleteProduct = require('../app/https/controllers/productController/deleteProduct');
const insertProduct = require('../app/https/controllers/productController/insertProduct');
const singleProduct = require('../app/https/controllers/productController/singleProduct');
const admin = require('../app/https/middleware/admin');
const auth = require('../app/https/middleware/auth');


const Router = express.Router();

Router.post('/login', authcontroller().login);
Router.post('/register', authcontroller().register);
Router.get('/allProduct', allProduct().getProduct);
Router.post('/addProduct', [auth, admin], insertProduct().addProduct);
Router.get('/productdetail/:_id', singleProduct().productDetail);
Router.delete('/deleteproduct/:_id', [auth, admin], deleteProduct().remove)
Router.put('/updateproduct/:_id', [auth, admin], insertProduct().updateProduct);
Router.post('/getcartitems', auth, cartProduct().getProducts);
Router.post('/logout', auth, authcontroller().logout);
module.exports = Router;