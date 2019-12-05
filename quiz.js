$(document).ready(function() {
//create array of quiz questions
var myQuestions = [
    {
        question: "What is the first and last pose of the sun salutation sequence?",
        answers: {
            a: 'Downward facing Dog',
            b: 'Mountain Pose',
            c: 'Pigeon Pose'
        },
        correctAnswer: 'b'
    },
    {
        question: "What are some of the benefits of yoga?",
        answers: {
            a: 'Increased flexibility',
            b: 'Increase in Mood',
            c: 'All of the above'
        },
        correctAnswer: 'c'
    },
	{
        question: "Who is yoga for?",
        answers: {
            a: 'The lucky',
            b: 'Young people',
            c: 'Everyone'
        },
        correctAnswer: 'c'
    },
	{
        question: "What do you need to practice yoga?",
        answers: {
            a: 'A yoga mat and comfortable clothes',
            b: 'An expensive yoga program',
            c: 'Perfect posture'
        },
        correctAnswer: 'a'
    },
	{
        question: "Which of the following is not part of the sun salutation sequence",
        answers: {
            a: 'Cobra Pose',
            b: 'Standing Tree',
            c: 'Forward Fold'
        },
        correctAnswer: 'b'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//function set up that contains other functions to execute quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // store and show the questions and answers in html 
        var output = [];
        var answers;

        // set up questions and answers
        for(var i=0; i<questions.length; i++){
            
        
            answers = [];
            for(letter in questions[i].answers){

                // Add radio buttons to html
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

      
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
       
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
       
        for(var i=0; i<questions.length; i++){

         
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
            }            
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = alert ('You got\n' + numCorrect + ' out of ' + questions.length)
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // show results on submit
    submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
	}
    

}
});//end ready
