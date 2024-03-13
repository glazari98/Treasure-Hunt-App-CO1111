async function getScoreAndDisplay() {
    let scoreElement = document.getElementById('score');
    await fetch("https://codecyprus.org/th/api/score?session=" + sessionID)
        .then(response => response.json())
        .then(jsonObject => {
            scoreElement.innerText = "Score: " + jsonObject.score;
        });
}

getScoreAndDisplay();