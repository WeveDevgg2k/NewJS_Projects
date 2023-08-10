const questions = [
  {
    question: "Qual é a capital do Brasil?",
    choices: ["Salvador", "Rio de Janiero", "São Paulo", "Brasília"],
    answer: "Brasília",
  },
  {
    question: "Qual é a capital da Itália?",
    choices: ["Roma", "Milão", "Nápoles", "Veneza"],
    answer: "Roma",
  },
  {
    question: "Qual é a capital da Espanha?",
    choices: ["Barcelona", "Valência", "Madrid", "Granada"],
    answer: "Madrid",
  },
  {
    question: "Qual é a capital da Inglaterra?",
    choices: ["Manchester", "Londres", "Liverpool", "Chelsea"],
    answer: "Londres",
  },
  {
    question: "Qual é a capital da França?",
    choices: ["Nice", "Lyon", "Paris", "Lille"],
    answer: "Paris",
  },
  {
    question: "Qual é a capital da Russia?",
    choices: ["St. Pettersburg", "Moscou", "Sibéria", "Novgorod"],
    answer: "Moscou",
  },
  {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Chicago", "Los angeles", "Washington D.C.", "Atlanta"],
    answer: "Washington D.C.",
  },
]

const questionElement = document.querySelector('#question')
const choiceElements = document.querySelectorAll('.choice')
const nextButton = document.querySelector('#next')
const scoreElement = document.querySelector('#score')
const wrongElement = document.querySelector('#wrong')

let currentQuestion = 0
let score = 0
let wrong = 0
let answerChosen = false

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion]
  questionElement.innerText = currentQuestionData.question

  const choices = shuffleArray(currentQuestionData.choices)

  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i]
  }

  answerChosen = false
}

function shuffleArray(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function checkAnswer(e) {
  if (answerChosen) return

  answerChosen = true

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++
    scoreElement.innerText = `Pontuação: ${score}`
    alert('Correto!')
  } else {
    wrong++
    wrongElement.innerText = `Erros: ${wrong}`
    alert(`Errado! A resposta correta é ${questions[currentQuestion].answer}`)
  }
}

choiceElements.forEach((btn) => {
  btn.addEventListener('click', checkAnswer)
})

nextButton.addEventListener('click', () => {
  if (!answerChosen) {
    alert('Por favor, responda a pergunta!')
    return
  }

  currentQuestion++

  if (currentQuestion < questions.length) {
    loadQuestion()
  } else {
    alert(`Fim de jogo! Você acertou ${score} de ${questions.length} perguntas!`)
    // reinicar o quiz
    restartQuiz()
  }
})

function restartQuiz() {
  currentQuestion = 0
  score = 0
  wrong = 0
  scoreElement.innerText = `Pontuação: 0`
  wrongElement.innerText = `Erros: 0`
  loadQuestion()
}

loadQuestion()