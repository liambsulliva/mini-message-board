var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Messageboard', messages: messages });
});

/* GET new message */
router.get('/new', function(req, res, next) {
  res.render('new');
});

/* POST new message */
router.post('/new', function(req, res, next) {
  const message = {
    text: req.body.message || 'No message',
    user: req.body.user || 'Anonymous',
    added: new Date()
  };
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
