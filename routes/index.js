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
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res)=>{
  res.render('form')
});

router.post('/new',(req,res)=>{
  let newMessage = req.body.text
  let user = req.body.user

  messages.push({
    text: newMessage,
    user: user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
