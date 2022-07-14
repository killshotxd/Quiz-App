const questionsFor = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js></js>",
    b: "<javascript></javascript>",
    c: "<scripting></scripting>",
    d: "<script></script>",
    correct: "d",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <body></body>",
    b: "The <head></head>",
    c: "Both",
    d: "none",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;
startQuiz();
function startQuiz() {
  deselectAns();
  const currentQuestionsFor = questionsFor[currentQuiz];

  questionEl.innerText = currentQuestionsFor.question;
  a_text.innerText = currentQuestionsFor.a;
  b_text.innerText = currentQuestionsFor.b;
  c_text.innerText = currentQuestionsFor.c;
  d_text.innerText = currentQuestionsFor.d;
}

function deselectAns() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === questionsFor[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < questionsFor.length) {
      startQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${questionsFor.length} questions correctly</h2>
 
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
