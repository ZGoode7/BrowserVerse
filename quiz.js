// JavaScript functionality for the BrowserVerse quiz

// Quiz timer settings
let timeLeft = 600;
let timerInterval;
let startTime = Date.now();

 // Countdown timer function
function startTimer() {
     timeLeft = 600;
    timerInterval = setInterval(function() {
        timeLeft--;

        // Stop the timer when time runs out
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            document.getElementById("browserQuiz").requestSubmit();
        }

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").textContent =
            `${minutes}:${seconds.toString().padStart(2, "0")}`;

    }, 1000);
}

// Start the quiz countdown
startTimer();
// Handle quiz submission
document.getElementById("browserQuiz").addEventListener("submit", function(event) {
    event.preventDefault();
    clearInterval(timerInterval);
 gradeQuiz();
});
// Correct answers for the quiz
const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "c",
    q6: "b",
    q7: "worldwideweb",
    q8: "1993",
    q9: ["a", "c"],
    q10: "c"
};
// Calculate the quiz score
function gradeQuiz() {
    let score = 0;
    let results = [];
 // Check single-answer multiple-choice questions
["q1", "q2", "q3", "q4", "q5", "q6", "q10"].forEach(function(question) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    const answer = selected ? selected.value : "";

    if (answer === correctAnswers[question]) {
        score++;
    }
});
 // Check fill-in-the-blank questions
["q7", "q8"].forEach(function(question) {
    const input = document.querySelector(`[name="${question}"]`);
    const answer = input ? input.value.trim().toLowerCase().replace(/\s+/g, "") : "";

    if (answer === correctAnswers[question]) {
        score++;
    }
});
// Check the multiple-answer question
const selectedQ9 = Array.from(document.querySelectorAll('input[name="q9"]:checked'));
const answersQ9 = selectedQ9.map(input => input.value);
if (answersQ9.length === correctAnswers.q9.length &&
    correctAnswers.q9.every(answer => answersQ9.includes(answer))) {
    score++;
}
document.getElementById("resultDetails").textContent =
    `You scored ${score} out of 10!`;
}
// Retake the quiz
document.getElementById("resetQuiz").addEventListener("click", function() {
    window.location.reload();
});
