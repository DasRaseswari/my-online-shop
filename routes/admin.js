const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.js');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;