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
  res.render('reg');
});
router.get('/contact',function(req,res){
  res.render('contact');
});
router.get('/paperGeneral',function(req,res){
  res.render('paperGeneral');
});
router.get('/paperAbstracts',function(req,res){
  res.render('paperAbstracts');
});
router.get('/paperFull',function(req,res){
  res.render('paperFull');
});
router.get('/committees',function(req,res){
  res.render('committees');
});
router.post('/register', function (req, res) {
  let data = {
    name: req.body.name,
    salutation: req.body.salutation,
    designation: req.body.designation,
    work_place: req.body.work_place,
    email: req.body.email,
    mobile: req.body.mobile
  };
  let db = req.db.collection('users');
  const onInsert = function (err) {
    if (!err) {
      res.cookie('name', data.id, {maxAge: 86400000, signed: true});
      res.redirect('/users');
    }
  };
  db.count(function (err, count) {
    count = count.toString();
    for (i = 1; i < count.length; i++) {

    }
  });
});
module.exports = router;
