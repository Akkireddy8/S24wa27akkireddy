var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Check if the query parameter 'x' exists
    var x = req.query.x ? parseFloat(req.query.x) : Math.random() * (10 - (-1)) + (-1);
    var y = Math.cosh(x);
    res.send(`cosh[${x}] is [${y}]`);
});

module.exports = router;
