var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ICCB' });
});
router.get('/main',function(req,res){
  res.render('main');
});
router.get('/invite',function(req,res){
  res.render('invite');
});
router.get('/comingSoon',function(req,res){
  res.render('comingSoon');
});
router.get('/register',function(req,res){
  res.render('register');
});
router.get('/contact',function(req,res){
  res.render('contact');
});
module.exports = router;
