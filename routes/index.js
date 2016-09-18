var express = require('express');
var path = require('path');
var mongoUsers = require(path.join(__dirname, '..', 'db', 'mongo-users'));
var fs = require('fs');
var bcrypt;
var multer = require('multer');
var upload = multer({
    dest:  './public/docs/',
    rename: function (fieldname, filename,originalname) {
        return originalname.replace(/\s+/g, "").toLowerCase();
    },
    limits:{
        files:1
    }

}).single('fileUpload');
var AWS =require('aws-sdk');
AWS.config.region = 'ap-south-1';
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const S3_BUCKET = process.env.S3_BUCKET;
var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
    if (err) { console.log("Error:", err); }
    else {
        for (var index in data.Buckets) {
            var bucket = data.Buckets[index];
            console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
        }
    }
});
var record = {
    _id: '',
    dob: '',
    acc_no: '',
    password_hash: '',
    authStrategy: ''
};
try
{
    bcrypt = require('bcrypt');
}
catch (err)
{
    try
    {
        bcrypt = require('bcryptjs');
    }
    catch (err)
    {
        throw "Failure to compile run time requirement: bcrypt(js)";
    }
}
var router = express.Router();
var authenticated = function (req, res, next) {
    if (req.signedCookies.name) {
        res.redirect('/users');
    }
    else {
        return next();
    }
};

router.get('/', function (req, res) {
    res.render('index', {title: 'ICCB'});
});
router.get('/login',function(req,res){
    res.render('login');
});
router.get('/getFile',function(req,res){
    var filePath = path.join(__dirname, '../public/docs/ICCB16_Abstract_Template.doc');
    res.sendFile(filePath);
});
router.post('/login', function (req, res) {
    var user = req.body.email;
    var password = req.body.password;
    var db = req.db;
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }

    var credentials =
    {
        '_id': user
    };
    var onFetch = function (err, doc)
    {
        console.log(err);
        if (err)
        {
            console.log(err);
            res.redirect('/userLogin');
        }
        else if (doc)
        {
            if (bcrypt.compareSync(password, doc['password_hash']))
            {
                res.cookie('name', doc['_id'], {maxAge: 86400000, signed: true});
                if(doc['admin']){
                    res.cookie('admin',doc['admin'].toString(), {maxAge: 86400000, signed: true});
                }
                console.log('logged in');
                res.redirect('/users')
            }
            else
            {
                console.log('Incorrect');
                res.send("Username or password error");
            }
        }else{
            console.log('bad username');
            res.send("Bad username please recheck the fields. <a href='/userLogin'>Back</a>'");
        }
    };
    mongoUsers.fetch(credentials,db, onFetch);
});

router.post('/register', function (req, res) {
    var db = req.db;
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }
    console.log(req.body);
    var onGetCount = function (err, number)
    {
        if (err)
        {
            console.log(err.message);
        }
        else if(req.body.email&&req.body.password&&req.body.confirm_password)
        {

            if (req.body.confirm_password === req.body.password)
            {
                var saltRounds = 10;
                var salt = bcrypt.genSaltSync(saltRounds);
                var newUser = record;
                newUser._id = req.body.email;
                newUser.fullname = req.body.fullname;
                newUser.institution = req.body.institution;
                newUser.dob = new Date();
                newUser.journal = req.body.journal;
                newUser.acc_no = parseInt(number) + 1;
                console.log(req.body);
                newUser.password_hash = bcrypt.hashSync(req.body.password,salt);
                newUser.abstract = '';
                newUser.admin = false;
                var onInsert = function (err, docs)
                {
                    if (err)
                    {
                        console.log(err);
                        res.render('register', {response: "User Already Exists"});
                    }
                    else
                    {
                        var name = newUser._id;
                        res.cookie('name', name, {maxAge: 86400000, signed: true});
                        res.redirect('/users');
                    }
                };
                mongoUsers.insert(newUser,db, onInsert);
            }
            else
            {
                console.log("Incorrect Password");
                res.render('register', {response: "Passwords do not match"});
            }
        }
        else{
            console.log('no data');
            res.send("Bad data please recheck the fields. <a href='/userLogin'>Back</a>'");
        }
    };
    mongoUsers.getCount({},db, onGetCount);
});
router.post('/registerAdmin', function (req, res) {
    var db = req.db;
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }
    console.log(req.body);
    var onGetCount = function (err, number)
    {
        if (err)
        {
            console.log(err.message);
        }
        else if(req.body.email&&req.body.password&&req.body.confirm_password)
        {

            if (req.body.confirm_password === req.body.password)
            {
                var saltRounds = 10;
                var salt = bcrypt.genSaltSync(saltRounds);
                var newUser = record;
                newUser._id = req.body.email;
                newUser.fullname = req.body.fullname;
                newUser.institution = req.body.institution;
                newUser.journal = req.body.journal;
                newUser.dob = new Date();
                newUser.acc_no = parseInt(number) + 1;
                console.log(req.body);
                newUser.password_hash = bcrypt.hashSync(req.body.password,salt);
                newUser.abstract = '';
                newUser.admin = true;
                var onInsert = function (err, docs)
                {
                    if (err)
                    {
                        console.log(err.message);
                        res.render('register', {response: "User Already Exists"});
                    }
                    else
                    {
                        var name = newUser._id;
                        res.cookie('name', name, {maxAge: 86400000, signed: true});
                        res.redirect('/users');
                    }
                };
                mongoUsers.insert(newUser,db, onInsert);
            }
            else
            {
                console.log("Incorrect Password");
                res.render('register', {response: "Passwords do not match"});
            }
        }
        else{
            console.log('no data');
            res.send("Bad data please recheck the fields. <a href='/userLogin'>Back</a>'");
        }
    };
    mongoUsers.getCount({},db, onGetCount);
});

router.get('/regLogin',function(req,res){
    res.render('register');
});
router.get('/userLogin',function(req,res){
    res.render('social');
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
router.get('/reg', function (req, res) {
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
router.post('/upload',function (req, res){
    upload(req, res, function (err) {
        if (err) {
            console.log(req.file);
            console.log(err);
            res.status(500).send('Server Error');
        }
        else
        {
            console.log(req.file);
            console.log(req.body);
            var db = req.db;
            var name = req.body.email;
            var onfind = function(err,user){
                if(err){console.log(err);}
                else {
                    console.log(user);
                    if(req.file) {
                        user.abstract = req.file.originalname;
                        var onUpdate = function () {
                            console.log(user);
                            var file = req.file;
                            fs.readFile(file.path, function (err, data) {
                                if (err) throw err;
                                var s3bucket = new AWS.S3({params: {Bucket:'iccb'},signatureVersion: 'v4'});
                                s3bucket.createBucket(function () {
                                    console.log(file);
                                    var params = {
                                        Key: file.originalname,
                                        Body: data
                                    };
                                    s3bucket.upload(params, function (err, data) {

                                        fs.unlink(file.path, function (err) {
                                            if (err) {
                                                console.error(err);
                                            }
                                        });
                                        if (err) {
                                            console.log('ERROR MSG: ', err);
                                            res.status(500).send(err);
                                        } else {
                                            console.log('Successfully uploaded data');
                                            res.status(204).redirect('/UploadComplete');
                                        }
                                    });
                                });
                            });

                        };
                        db.collection('users').update({_id: user._id}, user, onUpdate);
                    }
                }
            };
            db.collection('users').findOne({_id:name},onfind);


        }

    });
});
router.get('/checkAbs',function(req,res){
    var url = req.url;
   // console.log(req.body);
    console.log(url);
    var abstract = decodeURIComponent(url).split('=')[1].split('+').join(' ');
   // abstract = abstract;
     console.log(abstract);
    if(abstract.length>0)
    {//console.log(abstract);
        var s3 = new AWS.S3({params: {Bucket: 'iccb'},signatureVersion: 'v4'});
        var options = {
            Key    : abstract
        };
        var params ={
            Key:options.Key,
            Bucket: 'iccb'
        };
        s3.headObject(params, function (err, metadata) {
            if (err && err.code === 'NotFound') {
                console.log(abstract);
                console.log(err);
                res.send(false);
            } else {

               res.send(true);
            }
        });

    }else{
        res.send(false);
    }
});
router.get('/getAbs',function(req,res){
    var url = req.url;
    var abstract = decodeURIComponent(url).split('=')[1].split('+').join(' ');
   // abstract = abstract;
   // console.log(abstract);
    if(abstract.length>0)
    {console.log(abstract);
        var s3 = new AWS.S3({params: {Bucket: 'iccb'},signatureVersion: 'v4'});
        var options = {
            Key    : abstract
        };
        var params ={
            Key:options.Key,
            Bucket: 'iccb'
        };
        s3.headObject(params, function (err, metadata) {
            if (err && err.code === 'NotFound') {
               console.log(err);
                res.status(404).send("File not found");
            } else {

                s3.getSignedUrl('getObject',options,function(err,url){
                    if(err){console.log(err);res.status(404).send('Not found');}
                    else{
                        res.redirect(url);
                    }
                });
            }
        });

    }
    else{
        res.status(404).send("File not uploaded");
    }


});
router.get('/UploadComplete',function(req,res){
    res.render('uploaded');

});
router.get('/committees', function (req, res) {
    res.render('committees');
});
router.get('/sciProg',function(req,res){
    res.render('sciProg');
});
router.get('/posters',function(req,res){
    res.render('posters');
});
router.get('/awards',function(req,res){
    res.render('awards');
});
router.get('/exhibition',function(req,res){
    res.render('exhibition');
});
router.get('/socialPrograms',function(req,res){
    res.render('socialPrograms');
});
router.get('/venue',function(req,res){
    res.render('venue');
});
router.get('/accomodation',function(req,res){
    res.render('accomodation');
});
router.get('/ads',function(req,res){
    res.render('ads');
});
router.get('/sponsors',function(req,res){
    res.render('sponsors');
});
router.get('/speakers',function(req,res){
    res.render('speakers');
});

router.get('/login', authenticated, function (req, res) {
    res.render('login', {message: null});
});
router.get('/logout', function (req, res) {
    res.clearCookie('name', {});
    res.redirect('/');
});

module.exports = router;
