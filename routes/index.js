var express = require('express');
var router = express.Router();
var Image = require('../public/javascripts/Image');

router.get('/', function(req, res, next) {
  res.render('index', { images: new Array(200).fill().map(d => new Image()) });
});

module.exports = router;
