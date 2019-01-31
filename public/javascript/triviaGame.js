var triviaQuestions = [{
    question: "Which country hosted the first World Cup?",
    answerList: ["Uruguay","Brazil","Argentina","Germany"],
    answer: 0
},{
    question: "What year was Facebook founded?",
    answerList: ["2005","2004","2003","2007"],
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
    answerList: ["Argentina","Brazil","Costa Rica","Spain"],
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
    question: "When did the Toronto Maple Leafs last win the Stanley Cup?",
    answerList: ["1965","1966","1967","1968"],
    answer: 2
},{
    question:"Who won the English Premier League this year",
    answerList: ["Manchester City","Manchester United","Chelsea","Arsenal"],
    answer: 0
},{
    question:"Who won the Champions League 2017-2018",
    answerList: ["Real Madrid","Liverpool","Barcelona","Manchester City"],
    answer: 0
},{
    question:"Who is the premier of Ontario?",
    answerList: ["Andrea Horwath","Donald Trump","Doug Ford","Justin Trudeau"],
    answer: 2
}];

var gifArray = ["question1", "question2","question3", "question4","question5", "question6", "question7", "question8", "question9", "question10","question11"];
var currentQuestion; var correct; var incorrect; var answered; 
var unanswered; var time; var seconds; var userSelect;

var alert={
correct: "Correct!",
incorrect: "This is the wrong answer, the right answer is: ",
endTime: "Time is up!",
finished: "Now, let us see how well (or bad) you did!"
};

$('#startBtn').on('click',function(){
    $(this).hide();
    startGame();
});
$('#startOver').on('click',function(){
    $(this).hide();
    startGame();
});
function startGame(){
    $("#finalMessage").empty();
    $("#correctAnswer").empty();
    $("#incorrectAnswer").empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    newQuestion();
}

//new question
function newQuestion(){
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();
    answered=true;

//reset variables for a new game

//setting up a new question 
$("#currentQuestion").html('<h4>Question '+(currentQuestion + 1) + "/" + (triviaQuestions.length-1) +'</h4>');
$('.question').html('<h3>' + triviaQuestions[currentQuestion].question + '</h3>');
for (var i = 0; i < 4; i++){
    var choices = $('<div>');
    choices.text(triviaQuestions[currentQuestion].answerList[i]);
    choices.attr({'data-index': i});
    choices.addClass ('thisChoice')
    $(".answerList").append(choices);
}

countdown(); 

$('.thisChoice').on('click',function(){
    userSelect = $(this).data('index');
    clearInterval(time);
    answerpg();
    });
}
function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCounter, 1000);
}
function showCounter(){ 
    seconds --; 
    $("#timeLeft").html('<h3> Time Remaining: '+ seconds + '</h3>');
    if (seconds < 1){
        clearInterval(time);
        answered=false; 
        answerpg();
    }
}
function answerpg (){ 
    $("#currentQuestion").empty(); 
    $('.thisChoice').empty(); //clear question
    $('.question').empty();

    var rightAns = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnsIndex = triviaQuestions[currentQuestion].answer;


    $('#gif').html('<img src = "../images/gifs/'+gifArray[currentQuestion]+'.gif"width = "400px">')
    //right answer checker (if correct, incorrect, or unanswered)
    if ((userSelect == rightAnsIndex) && (answered=true)){
        correct++;
        $('#message').html (alert.correct);
    } else if ((userSelect !== rightAnsIndex) && (answered = true)){
        incorrect++;
        $('#message').html (alert.incorrect);
        $('#correctedAnswer').html(rightAns)
    } else{
        unanswered++;
        $('#message').html(alert.endTime);
        $('#correctedAnswer').html (rightAns);
        answered=true;
    }

    if (currentQuestion == (triviaQuestions.length-1)){
        setTimeout(scoreboard, 3000)
    } else {
        currentQuestion++; 
        setTimeout(newQuestion,3000);
    }
}
function scoreboard(){
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();

    $('#finalMessage').html (alert.finished);
    $('#correctAnswer').html ("Correct answers: " + correct);
    $('#incorrectAnswer').html ("Incorrect answers: "+ incorrect);
    $('#unanswered').html ("Unanswered: " + unanswered);
    $("#startOver").addClass('reset');
    $('#startOver').show(); 
    $('#startOver').html ('Start over');
}

