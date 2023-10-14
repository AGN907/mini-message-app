const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello!',
    user: 'Charles',
    added: new Date()
  }
]

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Send Message' })
})

router.post('/new', (req, res) => {
  const { user, text } = req.body
  messages.push({ user, text, added: new Date() })
  res.redirect('/')
})

module.exports = router;
