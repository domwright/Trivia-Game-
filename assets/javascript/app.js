$(document).ready(function() {

// hide quiz div container 
$(".container").hide();
$("#startButton").show();
$("#score").hide();
var startQuiz;



// Start button function
// show div container
var startButton = $("#startButton").click(function() {
    $("#startButton").hide();
    $(".container").show();
    console.log("game started");
    var progress = 0;
    var correct = 0;
    var incorrect = 0;
    onSubmit();
    timer();
})

function timer() {
    startQuiz = setInterval(countdown, 60000);
}
function stopTimer() {
    clearInterval(startQuiz)
}

// render questions
function onSubmit() {
    var submitButton = $("#submitButton").click(function() {
    var totalQuestions = 5;
    var answers = ["B", "C", "B", "D", "C"]

    var question1 = document.forms['submit']['question1'].value;
    var question2 = document.forms['submit']['question2'].value;
    var question3 = document.forms['submit']['question3'].value;
    var question4 = document.forms['submit']['question4'].value;
    var question5 = document.forms['submit']['question5'].value;
    stopTimer();
console.log(question5);

    for (var i = 1; i <= totalQuestions; i++){
        if(eval('q' + i) == '') {
            $(".triviaQuiz").hide();
            $("#submitButton").hide();
            document.getElementById("triviaQuestions").innerHTML = "You missed question number " + i+" of "+totalQuestions.length+" in total";
        }
    }
    for(var i = 1; i <= totalQuestions; i++) {
        if(eval('q' + i) == answers[i - 1]) {
            correct++;
        }
    }
    var results = document.getElementById('score')
    results.innerHTML= "You got "+correct+" questions correct";
}
})
    

    // $("#triviaQuestions").html(question1);
    // $("#buttons").html(choices1);

    

// loads questions to html page 
//function renderQuestion(questionIndex){


// if the text of the option picked matches 
// the answer of the current question, increment 