var cookies1 = document.cookie;
function getCookieValue(cookieName){
    let array = cookieName.split("; ");
    for(let i=0; i < array.length; i++){
        let cookie = array[i];
        let [name,value] =  cookie.split("=");
        if (name == "session"){
            return value;
        }
    }

}
let sessionID = getCookieValue(cookies1);

async function getScoreAndDisplay() {
    let scoreElement = document.getElementById('score');
    await fetch("https://codecyprus.org/th/api/score?session=" + sessionID)
        .then(response => response.json())
        .then(jsonObject => {
            scoreElement.innerText = "Score: " + jsonObject.score;
        });
}

getScoreAndDisplay();