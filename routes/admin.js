var express = require('express');
const product_controller = require('../Controllers/product_controller');
const post_controller = require('../Controllers/post_controller');
const fileUpload = require('express-fileupload');
var router = express.Router();
const app = express();
const port = 3000;

router.use(fileUpload());
router.use(express.static('public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});
router.get('/allpost', new post_controller().getPost)
router.get('/post', new post_controller().getCategory) 
router.post('/add-post', new post_controller().addPost)
router.get('/product', new product_controller().getProduct);
router.post('/add-product',new product_controller().addProduct)


module.exports = router;
