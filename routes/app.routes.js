var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page_title: 'Home' });
});
/* GET home page. */
router.get('/about-me', function(req, res, next) {
  res.render('about-me', { page_title: 'About Me' });
});
/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { page_title: 'Projects' });
});
/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { page_title: 'Services' });
});
/* GET home page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contact-me', { page_title: 'Contact Me' });
});

module.exports = router;
