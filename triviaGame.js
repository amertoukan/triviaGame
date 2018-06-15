var triviaQuestions = [{
    question: "Which country hosted the first World Cup?",
    answerList: ["Uruguay","Brazil","Argentina","Germany"],
    answer: 0
},{
    question: "What year was Facebook founded?",
    answerList: ["2005","2004","2003","2008","2007"],
    answer: 1
},{
    question: "Which country did NOT qualify to the World Cup?",
    answerList: ["Spain","Egypt","Uruguay","Italy"],
    answer: 3
},{
    question: "Who won the World Cup in 2014?",
    answerList: ["Germany","Brazil","Argentina","Netherlands"],
    answer: 0
},{
    question:"Where is the tallest mountain in South America located?",
    answerList: ["Argentina","Brazil","Costa Rica"],
    answer: 0
},{
    question:"Where do the Toronto Raptors play?",
    answerList: ["Air Canada Center", "Scotiabank Arena", "Rogers Center", "The Sky Dome"],
    answer: 1
},{
    question: "What year was the inaugural year for the Toronto Raptors?",
    answerList: ["94-95","95-96","96-97","97-98"],
    answer: 1
},{
    question: "When did the Toronto Maple Leafs win the Stanley Cup?",
    answerList: ["1965","1966","1967","1968","2010"],
    answer: 2
},{
    question:"Who won the English Premier League this year",
    answerList: ["Manchester City","Manchester United","Chelsea","Arsenal"],
    answer: 0
},{
    question:"Who won the Champions League 2017-2018",
    answerList: ["Real Madrid","Liverpool","Barcelona","Manchester City","Bayern Munich"],
    answer: 0
},{
    question:"Who is the premier of Ontario?",
    answerList: ["Andrea Horwath","Donald Trump","Doug Ford","Justin Trudeau"],
    answer: 2
}]
var array = ["Question 1", "Question 2","Question 3", "Question 4","Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"]
var currentQuestion;
var correct; 
var incorrect;
var answered; 
var unanswered; 
var time; 
var seconds; 
var userSelect;
var alert={
correct: "Correct!",
incorrect: "Sorry, that was the wrong answer.",
endTime: "Time is up!",
finished: "Congrats! Let's see your score."
}
//line 72
