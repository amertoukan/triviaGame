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
    question: "When did the Toronto Maple Leafs win the Stanley Cup?",
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
}]
var array = ["Question 1", "Question 2","Question 3", "Question 4","Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"]
var i;
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
$("#startBtn").onclick(function(){
    $(this).hide();
    startGame();
})
$('#startOver').on('click', function(){
	$(this).hide();
	newGame();
});
function startGame(){
    $("#message").empty();
    $("#correctAnswer").empty();
    $("#incorrectAnswer").empty();
    i=0;
    correct=0;
    incorrect=0;
    unanswered=0;
    newQuestion()
//new question
function newQuestion(){
    $("#message").empty();
    $("#correctAnswer").empty();
    $("#gif").empty();
    answered=true;

//reset variables for a new game

//setting up a new question 
$("#currentQuestion").html('Question #'+(i+1)+"/"+triviaQuestions.length);
$('.question').html('<h1'+triviaQuestions[i].question+'</h1>');
for (var x=0; x<4; x++){
    var choices = $('<div>');
    choices.text(triviaQuestions[i].answerList[x]);
    choices.attr({'data-index':x});
    choice.addClass ('thisChoice')
    $("answerList").append(choices);
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
	$('#timeLeft').html('<h2>Time Remaining: ' + seconds + '</h2>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}
function showCounter(){ 
    seconds--; 
    $("#timeRem").html('<h2> Time Remaining: '+ seconds + '</h2>');
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

    var rightAns = triviaQuestions[i].answerList[triviaQuestions[i].answer];
    var rightAnsIndex = triviaQuestions[i].answer;
    $('#gif').html('<img src = "assets/images/'+Array[currentQuestion]+'.gif"width = "400px">')
    //right answer checker (if correct, incorrect, or unanswered)
    if ((userSelect == rightAnsIndex) && (answered=true)){
        correct++;
        $('#message').html (messages.correct);
    } else if ((userSelect !== rightAnsIndex) && (answered = true)){
        incorrect++;
        $('#message').html (messages.incorrect);
        $('#correctedAnswer').html('The correct answer is: ' + rightAns)
    } else{
        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html ("The correct answer is: "+ rightAns);
        answered=true;
    }

    if (currentQuestion == (triviaQuestions.length-1)){
        setTimeout(scoreboard, 5000)
    } else {
        currentQuestion++; 
        setTimeout(newQuestion,5000);
    }
}
function scoreboard(){
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();

    $('#finalMessage').html (alert.finished);
    $('#correctAnswers').html ("Correct answers: " + correct);
    $('#incorrectAnswers').html ("Incorrect answers: "+ incorrect);
    $('#unanswered').html ("Unanswered: "+unanswered);
    $("#startOver").addClass('reset');
    $('#startOver').show(); 
    $('#startOver').html ('Start over?');
}
}
