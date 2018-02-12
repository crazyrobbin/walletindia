var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page : 'index', title: '' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page : 'about', title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page : 'contact', title: 'About' });
});

router.get('/acm', function(req, res, next) {
  res.render('acm', { page : 'acm', title: 'About' });
});


module.exports = router;
