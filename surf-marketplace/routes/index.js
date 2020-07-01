var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'SurfShop Home' });
});

router.get('/register', (req, res, next) => {
  res.send('register get');
});
router.post('/register', (req, res, next) => {
  res.send('register post');
});
router.get('/login', (req, res, next) => {
  res.send('login get');
});
router.post('/login', (req, res, next) => {
  res.send('login post');
});

router.get('/profile', (req, res, next) => {
  res.send('profile get');
});
router.put('/profile/:user_id', (req, res, next) => {
  res.send('register post');
});

router.get('/forgot-password', (req, res, next) => {
  res.send('profile get');
});

router.put('/forgot-password', (req, res, next) => {
  res.send('profile get');
});

router.get('/reset-password/:token', (req, res, next) => {
  res.send('profile get');
});

router.put('/reset-password/:token', (req, res, next) => {
  res.send('profile get');
});

module.exports = router;
