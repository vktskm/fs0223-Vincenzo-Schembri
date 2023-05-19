let questionsArr = [];
let shuffledquestionsArr = [];
let selectedQuestion = {};
let counterQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timerInterval = null;

//seleziona l'elemento HTML dove visualizzare il timer
let timer = document.getElementById("timer");

// tempo limite
const TIME_LIMIT = 60;

// due variabili per controllare il timer
let timePassed = 0;
let timeLeft = TIME_LIMIT;

const FULL_DASH_ARRAY = 283;
// cambio di colore a 20s
const WARNING_THRESHOLD = 20;
// colore di allerta a 10s
const ALERT_THRESHOLD = 10;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let remainingPathColor = COLOR_CODES.info.color;


async function getQuestions() {
  let containerDomanda = document.getElementById('contenitoreDomanda');
  let target = document.getElementById('contenitoreRisposte');
  let numDomanda = document.getElementById('numeroDomande');
  let timer = document.getElementById('timer');
  containerDomanda.style.opacity = 0;
  target.style.opacity = 0;
  numDomanda.style.opacity = 0;
  timer.style.opacity = 0;

  fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(async function (res) {
    let json = await res.json();
    questionsArr = json.results;
    shuffledquestionsArr = shuffle(questionsArr);
    buildQuiz();
  })
}

function addBtnsEvents() {
  let target = document.getElementById('contenitoreRisposte');
  let risposte_1 = target.querySelector('.risposte-1');
  let risposte_2 = target.querySelector('.risposte-2');

  risposte_1.firstElementChild.addEventListener('click', function () {
    doBtnEvents(1, 1);
  });
  risposte_2.firstElementChild.addEventListener('click', function () {
    doBtnEvents(2, 1);
  });

  if (risposte_1.children.length == 2) {
    risposte_1.lastElementChild.addEventListener('click', function () {
      doBtnEvents(1, 2);
    });
  }
  if (risposte_2.children.length == 2) {
    risposte_2.lastElementChild.addEventListener('click', function () {
      doBtnEvents(2, 2);
    });
  }
}

function doBtnEvents(ind, num) {
  let actualAnswer = "";
  if (ind == 1) {
    let risposte_1 = document.querySelector('.risposte-1');
    if (num == 1) {
      let btn = risposte_1.firstElementChild;
      actualAnswer = btn.textContent;
    } else {
      let btn = risposte_1.lastElementChild;
      actualAnswer = btn.textContent;
    }
  } else {
    let risposte_2 = document.querySelector('.risposte-2');
    if (num == 1) {
      let btn = risposte_2.firstElementChild;
      actualAnswer = btn.textContent;
    } else {
      let btn = risposte_2.lastElementChild;
      actualAnswer = btn.textContent;
    }
  }

  actualAnswer == selectedQuestion.correct_answer ? correctAnswers += 1 : wrongAnswers += 1;
  localStorage.setItem('correctAnswers', correctAnswers);
  localStorage.setItem('wrongAnswers', wrongAnswers);

  buildQuiz();
}

getQuestions();
addBtnsEvents();
buildTimer();

function shuffle(array) {
  const newArray = [...array]
  const length = newArray.length

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor((newArray.length - start) * Math.random())
    const randomItem = newArray.splice(randomPosition, 1)

    newArray.push(...randomItem)
  }
  return newArray
}

function buildQuiz() {
  if (shuffledquestionsArr.length == 0) {
    onTimesUp();
    location.href = "../result-page.html"
  } else {
    let containerDomanda = document.getElementById('contenitoreDomanda');
    let target = document.getElementById('contenitoreRisposte');
    let numDomanda = document.getElementById('numeroDomande');
    let timer = document.getElementById('timer');

    containerDomanda.style.opacity = 0;
    target.style.opacity = 0;
    numDomanda.style.opacity = 0;
    timer.style.opacity = 0;

    let risposte_1 = target.querySelector('.risposte-1');
    let risposte_2 = target.querySelector('.risposte-2');
    let random = Math.floor(Math.random() * (shuffledquestionsArr.length));
    let primo_titolo = document.querySelector('.prima-parte');
    selectedQuestion = shuffledquestionsArr[random];

    primo_titolo.innerHTML = shuffledquestionsArr[random].question;
    onTimesUp();
    timePassed = 0;
    timeLeft = 60;
    buildTimer();
    startTimer();

    let tmpSelectedQuestion = [];
    let shuffledSelectedQuestion = [];

    if (selectedQuestion.type == "boolean") {
      tmpSelectedQuestion.push(selectedQuestion.correct_answer);
      tmpSelectedQuestion.push(selectedQuestion.incorrect_answers[0]);
      shuffledSelectedQuestion = shuffle(tmpSelectedQuestion);

      if (risposte_1.children.length == 2) {
        risposte_1.removeChild(risposte_1.lastElementChild);
      }
      if (risposte_2.children.length == 2) {
        risposte_2.removeChild(risposte_2.lastElementChild);
      }
      let newB1 = document.createElement('button');
      newB1.classList.add('risposte');
      newB1.id = "risposta1";
      newB1.innerHTML = shuffledSelectedQuestion[0];
      risposte_1.replaceChild(newB1, risposte_1.firstElementChild);

      let newB2 = document.createElement('button');
      newB2.classList.add('risposte');
      newB2.id = "risposta3";
      newB2.innerHTML = shuffledSelectedQuestion[1];
      risposte_2.replaceChild(newB2, risposte_2.firstElementChild);

    } else {
      let tmpSelectedQuestion = [];
      let shuffledSelectedQuestion = [];

      tmpSelectedQuestion.push(selectedQuestion.correct_answer);
      tmpSelectedQuestion.push(selectedQuestion.incorrect_answers[0]);
      tmpSelectedQuestion.push(selectedQuestion.incorrect_answers[1]);
      tmpSelectedQuestion.push(selectedQuestion.incorrect_answers[2]);
      shuffledSelectedQuestion = shuffle(tmpSelectedQuestion);

      let tmpBtn = document.createElement('button');
      let tmpBtn2 = document.createElement('button');
      if (risposte_1.children.length == 1) {
        risposte_1.appendChild(tmpBtn);
      }
      if (risposte_2.children.length == 1) {
        risposte_2.appendChild(tmpBtn2);
      }

      let newB1 = document.createElement('button');
      newB1.classList.add('risposte');
      newB1.id = "risposta1";
      newB1.innerHTML = shuffledSelectedQuestion[0];
      risposte_1.replaceChild(newB1, risposte_1.firstElementChild);

      let newB2 = document.createElement('button');
      newB2.classList.add('risposte');
      newB2.id = "risposta2";
      newB2.innerHTML = shuffledSelectedQuestion[1];
      risposte_1.replaceChild(newB2, risposte_1.lastElementChild);

      let newB3 = document.createElement('button');
      newB3.classList.add('risposte');
      newB3.id = "risposta3";
      newB3.innerHTML = shuffledSelectedQuestion[2];
      risposte_2.replaceChild(newB3, risposte_2.firstElementChild);

      let newB4 = document.createElement('button');
      newB4.classList.add('risposte');
      newB4.id = "risposta4";
      newB4.innerHTML = shuffledSelectedQuestion[3];
      risposte_2.replaceChild(newB4, risposte_2.lastElementChild);
    }
    counterQuestions++;
    numDomanda.innerHTML = `QUESTION ${counterQuestions} <span id="domandeRimaste">&nbsp;/ 10</span>`;
    shuffledquestionsArr.splice(random, 1);

    setTimeout(function () {
      containerDomanda.style.opacity = 1;
      target.style.opacity = 1;
      numDomanda.style.opacity = 1;
      timer.style.opacity = 1;
    }, 600)

    addBtnsEvents();
  }
}


function buildTimer() {
  timer.innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      ${timeLeft}
    </span>
  </div>
  `;
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = timeLeft;
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      buildQuiz();
    }
  }, 1000);
}

// Divide il tempo rimanente per il tempo limite
function calculateTimeFraction() {
  return timeLeft / TIME_LIMIT;
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;

  // If the remaining time is less than or equal to 10, remove the "warning" class and apply the "alert" class.
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);

    // If the remaining time is less than or equal to 20, remove the base color and apply the "warning" class.
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

