var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var unirest = require('unirest');

var querystring = require('querystring');
var mongoTransaction = require(path.join(__dirname, '..', 'db', 'mongo-transactions'));

var saleJSON ={
    id_trans: 'ICCB',
    id_event: process.env.id_event,
    id_Merchant: process.env.id_Merchant,
    id_Password: process.env.id_Password
};

const ZERO = 000000;
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
       /* var onGetCount = function (err, count) {
            var num = zero + count;*/
            var tId = 'ICCB' + 000001;
            var onEnd = function (response) {
              if (response.error) {
                console.log(response.error);
                console.log('error occurred');
              }
              else {
                res.render('payment', {html: response});
              }
            };
            //TODO-calulate amount, currently hard coded as 1.00
            unirest.post(process.env.payURL|| 'testUrl')
              .send('id_trans=' + tId)
              .send('id_event=' + process.env.id_event|| 'testEvent')
              .send('id_merchant=' + process.env.id_merchant||'testMerchant')
              .send('id_password=' + process.env.id_password||'testPass')
              .send('id_name=' + name)
              .send('amt_event=1.00')
              .end(onEnd);
       // };
      //  mongoTransaction.getCount({}, db, onGetCount);
    }
    else{
        res.redirect('/userLogin');
    }
});
router.get('/cred',function(req,res){
    var tid = "ICCB"+000002;
    res.status(200).send(
        {
            id_trans:tid,
            id_event: process.env.id_event,
            id_merchant:process.env.id_merchant,
            id_password:process.env.id_password,
            amt_event:1.00,
            path: process.env.payURL
        }
    );
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

router.post('/paymentComplete', function (req, res) {
  var refNo = req.body.Refno;
  var tId = req.body.Tpsltranid;
  var bankRefNo = req.body.bankrefno;
  var txnDate = req.body.txndate;
  var status = req.body.status;
    var amount = req.body.txnamount;
    console.log(req.body);
  if (tId && bankRefNo) {
    console.log('success');
    res.render('success');
  }
  else {
    console.log('fail');
  }
});

module.exports = router;
