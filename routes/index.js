var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About me page */
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About Me'});
});

/* GET Products page */
router.get('/projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects'});
});

/* GET Services page */
router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services'});
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact Me'});
});

module.exports = router;
