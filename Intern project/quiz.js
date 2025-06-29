const questions = [
    {
        question: "1.What is EV battery swapping?",
        answers: [
            { text: "Replacing the car engine", correct: false },
            { text: "Exchanging discharged battery with a charged one", correct: true },
            { text: "Changing car tires", correct: false },
            { text: "Refueling with petrol", correct: false }
        ]
    },
    {
        question: "2.One benefit of battery swapping is?",
        answers: [
            { text: "Long charging time", correct: false },
            { text: "Reduced downtime", correct: true },
            { text: "Higher fuel cost", correct: false },
            { text: "Pollution increase", correct: false }
        ]
    },
    {
        question: "3.Battery swapping is commonly used in:",
        answers: [
            { text: "Electric scooters and bikes", correct: true },
            { text: "Diesel trucks", correct: false },
            { text: "Petrol cars", correct: false },
            { text: "Airplanes", correct: false }
        ]
    },
    {
        question: "4.Battery swapping stations provide:",
        answers: [
            { text: "Free Wi-Fi", correct: false },
            { text: "Charged batteries ready to use", correct: true },
            { text: "Engine oil replacement", correct: false },
            { text: "Car washing services", correct: false }
        ]
    },
    {
        question: "5.Which is a challenge of battery swapping?",
        answers: [
            { text: "Standardizing battery sizes", correct: true },
            { text: "Making petrol stations", correct: false },
            { text: "Building more airports", correct: false },
            { text: "Increasing traffic signals", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll("#answer-button .but");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.innerHTML = answer.text;
        button.dataset.correct = answer.correct;
        button.disabled = false;
        button.classList.remove("correct", "incorrect");
        button.style.display = "inline-block";
    });

    nextButton.style.display = "none";
}

answerButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";

        if (isCorrect) {
            selectedButton.classList.add("correct");
            score++;
        } else {
            selectedButton.classList.add("incorrect");
        }

        answerButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.correct === "true") {
                btn.classList.add("correct");
            }
        });

        nextButton.style.display = "block";
    });
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    answerButtons.forEach(button => {
        button.style.display = "none";
    });
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();
