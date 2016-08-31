var express = require('express');
var path = require('path');
var mongoUsers = require(path.join(__dirname, '..', 'db', 'mongo-users'));
var Busboy = require('busboy');
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
//var bcrypt = require('bcryptjs');

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
                console.log('logged in');
                res.redirect('/userLogin')
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

router.get('/articles', function (request, response) {
    var collection = request.db.collection('articles');
    var m_category = request.query.main_category;
    if (m_category) {
        collection.find({main_category: m_category}).toArray(function (err, docs) {
            if (err) {
                response.status(500).send('Internal Server Error');
            }
            else {
                response.json(docs);
            }
        });
    }
});/*
 router.get('/register',function(req,res){
 res.render('register');
 });*/
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
                        res.redirect('/userLogin');
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
                        res.redirect('/userLogin');
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
                                if (err) throw err; // Something went wrong!
                                var s3bucket = new AWS.S3({params: {Bucket:'iccb'},signatureVersion: 'v4'});
                                s3bucket.createBucket(function () {
                                    console.log(file);
                                    var params = {
                                        Key: file.originalname, //file.name doesn't exist as a property
                                        Body: data
                                    };
                                    s3bucket.upload(params, function (err, data) {
                                        // Whether there is an error or not, delete the temp file
                                        fs.unlink(file.path, function (err) {
                                            if (err) {
                                                console.error(err);
                                            }
                                           // console.log('Temp File Delete');
                                        });

                                       // console.log("PRINT FILE:", file);
                                        if (err) {
                                            console.log('ERROR MSG: ', err);
                                            res.status(500).send(err);
                                        } else {
                                            console.log('Successfully uploaded data');
                                            res.status(204).end();
                                        }
                                    });
                                });
                            });
                         /*   var filePath = 'public/docs/' + user.abstract;
                            var syspath = path.join(__dirname, '..', filePath);
                            fs.access(syspath, fs.R_OK | fs.W_OK, function (err) {
                                if (err)console.log(err);
                                // console.log(err ? 'no access!' : 'can read/write');
                                fs.rename(syspath, 'public/docs/' + user.abstract + '.doc', function (err) {
                                    if (err) {
                                        // console.log('rename error');
                                        console.log(err);
                                    }else{

                                    }
                                });
                            });*/
                           // res.status(204).end();
                        };
                        db.collection('users').update({_id: user._id}, user, onUpdate);
                    }
                }
            };
            db.collection('users').findOne({_id:name},onfind);

           // fileRename(req.file.filename,req.file.originalname,onUpload)
        }

    });
});
router.get('/getAbs',function(req,res){
    var url = req.url;
    var abstract = url.split('=')[1];
    if(abstract.length>0)
    {console.log(abstract);
        var s3 = new AWS.S3({params: {Bucket: 'iccb'},signatureVersion: 'v4'});
        var options = {
            Key    : abstract
        };
    var filePath = path.join(__dirname, '../public/docs/'+abstract+'.doc');
        var fileStream = s3.getObject(options, function(err, data) {
            if (err) {
                console.log(err);

            }


    }).createReadStream().on('error', function (err) {
            if(err){console.log(err);}

    }).pipe(res).on('error',function(err){
                    if(err){console.log(err)}{
                res.status(404).send('Flie not found');
                    }
                });

    //res.sendFile(filePath);

    }
    else{
        res.status(404).send("File not uploaded");
    }


});
var fileRename = function(fileName,originalName,callback){

    var imgPath = 'public/docs/' + fileName;
    //console.log('file rename');
    var syspath = path.join(__dirname, '..', imgPath);
    //console.log(imgPath);
    //console.log(syspath);
    var replace_with = originalName.replace(/\s+/g, "").toLowerCase();
    // console.log(replace_with);
    fs.access(syspath, fs.R_OK | fs.W_OK, function (err) {
        // console.log(err ? 'no access!' : 'can read/write');
        fs.rename(syspath,'public/docs/'+replace_with,function(err){
            if(err){
                // console.log('rename error');
                //console.log(err);
            }else{
                callback(replace_with);
            }
        });
    });
};
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
/*
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
});*/
router.get('/login', authenticated, function (req, res) {
    res.render('login', {message: null});
});/*
router.post('/login', function (req, res) {
    let data = {
        id: req.body.username,
        password: req.body.password
    };
    let db = req.db.collection('users');
    db.findOne({id: data.id}, function (err, doc) {
        if (!err && doc) {
            bcrypt.compare(data.password, doc.password, function (err, result) {
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
});*/
router.get('/logout', function (req, res) {
    res.clearCookie('name', {});
    res.redirect('/');
});

module.exports = router;
