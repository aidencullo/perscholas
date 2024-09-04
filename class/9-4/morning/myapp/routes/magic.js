var express = require('express');
var router = express.Router();

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

router.get('/:question', function(req, res, next) {
  const userQuestion = `<h1>Question: ${req.params.question}</h1>`;
  const response = `<h2>Response: ${responses[Math.floor(Math.random() * responses.length)]}</h2>`;
  res.send(userQuestion + response);
});

router.get('/', function(req, res, next) {
  res.send('please provide a question');
});

module.exports = router;
