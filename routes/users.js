var express = require('express');
var router = express.Router();
var http = require('http');
var mongoTransaction = require(path.join(__dirname, '..', 'db', 'mongo-transactions'));

var saleJSON ={
    id_trans:'ICNAN',
    id_event:process.env.id_event,
    id_Merchant:process.env.id_Merchant,
    id_Password:process.env.id_Password,
    id_name:''
};
var zero = 00000000;
/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.signedCookies.name)
    {
        res.send({message:true});
        console.log('users');

    }else{
        console.log('user login false');
        res.send({message:false});
    }

});
router.post('/sale',function(req,res){
    if (req.signedCookies.name) {
        var db = req.db;
        var name = req.body.fullname;
        var onGetCount = function (err, count) {
            var num = zero + count;
            var tempJson = saleJSON;
            tempJson.id_trans = 'ICNAN' + num;
            tempJson.id_name = name;
            var data = querystring.stringify(tempJson);

            var options = {
                host: 'iccb.herokuapp.com',
                port: 80,
                path: process.env.path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(data)
                }
            };

            var httpreq = http.request(options, function (response) {
                response.setEncoding('utf8');
                response.on('data', function (chunk) {
                    console.log("body: " + chunk);
                });
                response.on('end', function () {
                    res.send('ok');
                })
            });
            httpreq.write(data);
            var onEnd = function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    res.render('confirm', {data: data});
                }
            };
            httpreq.end(onEnd);
        };
        mongoTransaction.getCount({}, db, onGetCount);
    }
    else{
        res.redirect('/userLogin');
    }
});
router.get('/sell',function(req,res){
    if(req.signedCookies.name) {
        res.render('sell');
    }
    else{
        res.redirect('/userLogin');
    }
});
router.get('/logout',function(req,res){
    if (req.signedCookies.name)
    {
        res.clearCookie('name');
    }
    res.redirect('/userLogin');
});

module.exports = router;
