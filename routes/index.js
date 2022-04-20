var express = require('express');
var router = express.Router();

let currentDate = new Date()
let cDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
let cTime = (currentDate.getHours()-12) + ":" + currentDate.getMinutes()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: cDate + " " + cTime
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: cDate + " " + cTime
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
    added: cDate + " " + cTime
  })
  res.redirect('/')
})

module.exports = router;
