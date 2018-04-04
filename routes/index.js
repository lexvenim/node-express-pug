var express = require('express');
var router = express.Router();
var DogGen = require('../public/javascripts/DogGen');

router.get('/', function(req, res, next) {
  res.render('index', { images: DogGen.getDogs(300) });
});

module.exports = router;
