var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title: 'User Index'});
});
router.get('/new', function(req,res,next){
	res.render('new_user',{title: 'New User'});
});
module.exports = router;
