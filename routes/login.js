var express = require('express');
const login_controller = require('../Controllers/login_controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/login-register');
});
router.post('/register', new login_controller().register);
router.post('/loggedin', new login_controller().login )
module.exports = router;
