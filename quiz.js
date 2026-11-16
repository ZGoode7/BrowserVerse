// JavaScript functionality for the BrowserVerse quiz

// Quiz timer settings
let timeLeft = 600;
let timerInterval;
let startTime = Date.now();

 // Countdown timer function
function startTimer() {
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
});
