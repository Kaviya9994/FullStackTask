const questions = [
    {
        question: "How will you add script to the html file",
        options: ["<script>", "<scripting>", "<js>", "<javascript>"],
        correctAnswer: "<script>",
    },
    {
        question: "how will you write an alert message?",
        options: ["alert()", "msgbox()", "alertBox()", "msg()"],
        correctAnswer: "alert()",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
        correctAnswer: "onclick",
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

function startQuiz() {
    loadQuestion();
    timer = setInterval(updateTimer, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
        updateProgressBar();
    } else {
        finishQuiz();
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateTimer() {
    const timerValue = parseInt(timerElement.textContent);
    if (timerValue > 0) {
        timerElement.textContent = timerValue - 1;
    } else {
        clearInterval(timer);
        finishQuiz();
    }
}

function finishQuiz() {
    questionText.textContent = "Quiz Finished!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
    progressBar.style.width = "100%";
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

startQuiz();

