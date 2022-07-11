var readlineSync = require('readline-sync');
var score = 0;

function game(question, answer){
var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right");
    score = score +1;  
  }
  else{
    console.log("Yor are wrong");
    score = score-1;
  }
}


var question = [
  {
    question : "Where Guntash live? ",
    answer: "gurdaspur"
  },
  {
    question: "Where Guntash want to visit? ",
    answer: "Maldives"
  },
  {
    question: "Which color Guntash like the most? ",
    answer: "black"
  },
  {
    question: "Which season Guntash like the most? ",
    answer: "winter"
  },
  {
    question: "Which food Guntash always ready to eat!",
    answer: "panipuri"
  }
]

for(var i=0; i<question.length;i++){
  var currentQuestion = question[i];
  game(currentQuestion.question, currentQuestion.answer);
}

console.log("Your score is: " + score);