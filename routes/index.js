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


router.get('/gallery', function(req, res, next) {
  res.render('gallery', { page : 'gallery', title: 'About' });
});


router.get('/book', function(req, res, next) {
  res.render('book', { page : 'book', title: 'About' });
});

router.get('/track', function(req, res, next) {
  res.render('track', { page : 'track', title: 'About' });
});

module.exports = router;
