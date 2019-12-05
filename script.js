window.onload = function () {

const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
	currentQuestionIndex++
	setNextQuestion()
})

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
	currentQuestionIndex++
	setNextQuestion()
})
}

function startGame() {
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
	console.log('Started')
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random()-.5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}




function setNextQuestion() {
	const nextButton = document.getElementById("next-btn")
	resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex]) 
}
function showQuestion(question){
	questionElement.innertext = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innertext = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState() {
	const nextButton = document.getElementById("next-btn")
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}
function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button =>{
		setStatusClass(button, button.dataset.correct)
	})	
	if (shuffledQuestions.length>currentQuestionIndex + 1)
	{
		nextButton.classList.remove('hide')
} else{
	startButton.innerText= 'Restart'
	startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else{
		element.classList.add('wrong')
}
}

function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
{
	question: 'What is the first and last pose of the sun salutation sequence?',
	answers: [
	{text: '4', correct: true},
		{text: '22', correct: false}
	]
},

{
	question: 'What is the first and last pose of the sun salutation sequence?',
	answers: [
	{text: '4', correct: true},
		{text: '22', correct: false}
	]
},

{
	question: 'What is the first and last pose of the sun salutation sequence?',
	answers: [
	{text: '4', correct: true},
		{text: '22', correct: false}
	]
},

{
	question: 'What is the first and last pose of the sun salutation sequence?',
	answers: [
	{text: '4', correct: true},
		{text: '22', correct: false}
	]
},
{
	question: 'What is the first and last pose of the sun salutation sequence?',
	answers: [
	{text: '4', correct: true},
		{text: '22', correct: false}
	]
}
]