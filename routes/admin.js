const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    // console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
});

exports.routes = router;
exports.products = products;