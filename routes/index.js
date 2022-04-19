var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().getDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().getDate()
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
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
    added: new Date().getDate()
  })
  res.redirect('/')
})

module.exports = router;
