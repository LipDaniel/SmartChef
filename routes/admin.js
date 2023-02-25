var express = require('express');
const product_controller = require('../Controllers/product_controller');
const post_controller = require('../Controllers/post_controller');
const fileUpload = require('express-fileupload');
var router = express.Router();
const port = 3000;

// CONFIG FILE UPLOAD
router.use(fileUpload());
router.use(express.static('public'));

// DASHBOARD
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});

// POST
router.get('/allpost', new post_controller().getPost)
router.get('/post', new post_controller().getCategory) 
router.post('/add-post', new post_controller().addPost)
router.get('/editpost/:id', new post_controller().getEditPost)
router.post('/editpost/:id', new post_controller().editPost)

// PRODUCT
router.get('/product', new product_controller().getProduct);
router.post('/add-product',new product_controller().addProduct)


module.exports = router;
