var express = require('express');
const home_controller = require('../Controllers/home_controller');
const login_controller = require('../Controllers/login_controller');

var router = express.Router();

/* GET home page. */
router.get('/', new home_controller().getHomePage);
router.get('/shoppingcart/:id', new home_controller().getShoppingCart);
router.post('/shoppingcart/:id/paying', new home_controller().postShoppingCart);
router.get('/logout', new login_controller().logout)
module.exports = router;
