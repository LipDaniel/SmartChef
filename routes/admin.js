var express = require('express');
const product_controller = require('../Controllers/product_controller');
const post_controller = require('../Controllers/post_controller');
const faq_controller = require('../Controllers/faq_controller');

const fileUpload = require('express-fileupload');
const { escapeSelector } = require('jquery');
var router = express.Router();
const port = 3000;

// CONFIG FILE UPLOAD
router.use(fileUpload());
router.use(express.static('public'));

// DASHBOARD
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});

// FAQ
router.get('/faq', new faq_controller().getFaq);
router.get('/faq/add', new faq_controller().postFaq);

// POST
router.get('/allpost', new post_controller().getPost)
router.get('/post', new post_controller().getCategory) 
router.post('/add-post', new post_controller().addPost)
router.get('/editpost/:id', new post_controller().getEditPost)
router.post('/editpost/:id', new post_controller().editPost)

// PRODUCT
router.get('/product', new product_controller().getProduct);
router.post('/add-product',new product_controller().addProduct)

// MESSAGE
router.get('/message', function(req, res, next) {
  res.render('admin/message');
});

module.exports = router;
