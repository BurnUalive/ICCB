var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var unirest = require('unirest');
var querystring = require('querystring');
var mongoTransaction = require(path.join(__dirname, '..', 'db', 'mongo-transactions'));

var saleJSON ={
    id_name:'',
    id_trans: 'ICCB',
    id_event: process.env.id_event,
    id_merchant: process.env.id_Merchant,
    id_password: process.env.id_Password,
    amt_event: 0,
    Refno:'',
    Tpsltranid:'',
    bankrefno:'',
    txndate:'',
    status:'',
    txnamount:0,
    path: process.env.payURL
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
            var tId = 'GRA' + 000001;
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
    var db = req.db;
    var onGetCount = function(err,count){
        if(err){
            res.status(500).send('Internal Server Error');
        }
        else{
            var tid = "ICCB"+count;
            var name = req.body.name;
            var amount = req.body.amt_event;
            var data = saleJSON;
            data.id_name = name;
            data.id_trans = tid;
            data.amt_event = amount;
            var onInsert = function(err,doc){
                if(err){
                    res.status(500).send('Internal Server Error');
                }
                else{
                    res.status(200).send(data);
                }
            };
            mongoTransaction(data,db,onInsert)
        }
    };
    mongoTransaction.getCount({},db,onGetCount);


});
router.get('/sell',function(req,res){
    if(req.signedCookies.name) {
        res.render('sell');
    }
    else{
        res.redirect('/userLogin');
    }
});
router.post('/store',function(req,res){
    var data = req.body;
    var db = req.db;
    var onInsert = function(err,doc){
        if(err){
            res.status(500).send('DB error');
        }
        else{
            res.status(200).send(true);
        }
    };
    mongoTransaction.insert(data,db,onInsert);
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
    var onFind = function(err,doc){
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else if(doc){

                if(refNo===doc.id_trans && amount >= doc.amt_event){

                    doc.Refno=refNo;
                    doc.Tpsltranid=tId;
                    doc.bankrefno= bankRefNo;
                    doc.txndate= txnDate;
                    doc.status=status;
                    doc.txnamount=amount;
                    var onUpdateDB = function(err,doc){
                        if(err){
                            res.status(500).send('Internal Server Error');
                        }else if(doc){
                            res.render('sale',{doc:doc});
                        }else{
                            res.status(404).send('Transaction not found')
                        }
                    };
                    mongoTransaction.updateDB({id_trans:refNo},db,doc,onUpdateDB);
                }
                else{
                    res.status(500).send('Transaction Failed');
                }
        }else{
            res.status(404).send("Transaction not found");
        }
    };
    mongoTransaction.fetch({id_trans:refNo},db,onFind);
});

module.exports = router;
