var playerScore = sessionStorage.getItem("playerScore");

var scoreElement = document.getElementById("score");
if (playerScore !== null) {
    scoreElement.textContent = "Your Score: " + playerScore;
}

