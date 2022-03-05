var startButton = document.getElementById("start_btn")
var timerEl = document.getElementById("timer")

var question1 = "1. Which is the best method to encapsulate code that executes a task?"
var correctAnswer1 = "-B a function"
var answerChoices1 = ["-A a loop", "-B a function", "-C a condition", "-D an event"]

var question2 = "2. Which kind of instructions respond to external actions(i. e. mouse click or key typed on the keyboard)"
var correctAnswer2 = "-D an event"
var answerChoices2 = ["-A a loop", "-B a function", "-C a condition", "-D an event"]

var question3 = "3. What is funding and fixing errors in programs?"
var correctAnswer3 = "-A  Debugging"
var answerChoices3 = ["-A  Debugging", "-B bug", "-C Program", "-D Code"]

var question4 = "4. What can you make with programming?"
var correctAnswer4 = "-D all of the above"
var answerChoices4 = ["-A games", "-B apps", "-C websites", "-D all of the above"]

var question5 = "5. Coding is... "
var correctAnswer5 = "-B writing instructions in a language that computers understand"
var answerChoices5 = ["-A using only symbols to write a secret message", "-B writing instructions in a language that computers understand", "-C using only words", "-D hurting brains"]

var timerId;
var time = 60




//Start quiz 

startButton.onclick = startQuiz


//Question and answer choices appear
function startQuiz() {
startButton.setAttribute("class", "hidden")
    document.getElementById("question").textContent = question1
    //document.getElementById("answerChoices").innerHTML= answerChoices1  

    answerChoices1.forEach(function(value){
        document.getElementById("answerChoices").innerHTML += ("<button>" + value + "</button>")
     });

   
    //Start timer 

    timerId = setInterval(function () {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endQuiz()
        }
    }, 1000)

}

function Timer() {
    //Time left on the timer

}





function takingQuiz() {


    //You chose the correct answer


    //You chose the incorrect answer


    //Time off the timer for incorrect answer


    //Game is over when timer reaches 0 OR all questions answered


}







function endQuiz() {
    //Game is over-save initials and score   
}











