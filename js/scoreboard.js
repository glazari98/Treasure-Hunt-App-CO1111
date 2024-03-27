// Retrieves the player's score from session storage
var playerScore = sessionStorage.getItem("playerScore");
// Updates the score element on the webpage if the score exists
var scoreElement = document.getElementById("score");
if (playerScore !== null) {
    scoreElement.textContent = "Your Score: " + playerScore;
}

