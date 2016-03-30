var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

router.get('/', function (req, res) {
    res.render('index', {title: 'ICCB'});
});
router.get('/main', function (req, res) {
    res.render('main');
});
router.get('/invite', function (req, res) {
    res.render('invite');
});
router.get('/comingSoon', function (req, res) {
    res.render('comingSoon');
});
router.get('/register', function (req, res) {
    res.render('reg');
});
router.get('/contact', function (req, res) {
    res.render('contact');
});
router.get('/paperGeneral', function (req, res) {
    res.render('paperGeneral');
});
router.get('/paperAbstracts', function (req, res) {
    res.render('paperAbstracts');
});
router.get('/paperFull', function (req, res) {
    res.render('paperFull');
});
router.get('/committees', function (req, res) {
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
        data.id = count;
        for (i = 5; i > count.length; i--) {
            data.id = '0' + data.id;
        }
        data.id = 'ICCB2016' + data.id;
        db.insert(data, onInsert);
    });
});
router.get('/login', function(req, res) {
    res.render('login', {message: null});
});
router.post('/login', function(req, res) {
   let data = {
       id: req.body.username,
       password: req.body.password
   };
   let db = req.db.collection('users');
    db.findOne({id: data.id}, function (err, doc) {
        if (!err && doc) {
            bcrypt.compare(data.password, doc.password, function(err, result){
               if (result) {
                   res.cookie('name', data.id, {maxAge: 86400000, signed: true});
                   res.redirect('/users');
               }
                else {
                   res.redirect('/login', {message: 'Invalid Credentials'});
               }
            });
        }
        else {
            res.redirect('/login', {message: 'Username Not Found'});
        }
    });
});
module.exports = router;
