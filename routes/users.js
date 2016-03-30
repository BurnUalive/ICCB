var express = require('express');
var router = express.Router();

var authenticated = function (req, res, next) {
    if (req.signedCookies.name) {
        return next();
    }
    else {
        res.redirect('/');
    }
};

router.get('/', authenticated, function (req, res) {

});

module.exports = router;
