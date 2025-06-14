const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Madrid"],
    correct: 2
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "Who is the CEO of Tesla?",
    answers: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    correct: 0
  }
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  resultEl.classList.add('hide');
  questionEl.parentElement.classList.remove('hide');
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.innerText = answer;
    btn.classList.add('answer-btn');
    btn.addEventListener('click', () => selectAnswer(index));
    const li = document.createElement('li');
    li.appendChild(btn);
    answersEl.appendChild(li);
  });
}

function resetState() {
  answersEl.innerHTML = '';
  nextBtn.style.display = 'none';
}

function selectAnswer(index) {
  const correct = questions[currentQuestionIndex].correct;
  if (index === correct) {
    score++;
    alert('Correct!');
  } else {
    alert(`Wrong! Correct answer is: ${questions[currentQuestionIndex].answers[correct]}`);
  }
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.parentElement.classList.add('hide');
  resultEl.classList.remove('hide');
  scoreEl.innerText = `${score} out of ${questions.length}`;
}

startQuiz();
