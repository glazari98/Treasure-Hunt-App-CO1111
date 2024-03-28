// Defines a function to retrieve the value of a cookie by its name

function getCookieValue(cookieName) {
    let array = document.cookie.split("; ");
    for (let i = 0; i < array.length; i++) {
        let cookie = array[i];
        let [name, value] = cookie.split("=");
        if (name === cookieName) {
            return value;
        }
    }
}
//get the session cookie value
let session = getCookieValue("sessionGame");

//fetch to get the list of treasure hunts
fetch("https://codecyprus.org/th/api/list").then(response => response.json())
.then(jsonObject => {

    const containerElement = document.getElementById("treasureHunts");
    //get the current date/time
    let currentDate = new Date();
    currentDate = currentDate.getTime();
    //iterate through the treasure hunts array
    jsonObject.treasureHunts.forEach((element) => {
    //if the date that the treasure hunt starts is less than the current date then it means it is a valid treasure hunt
    let validTreasureHunt = (element.startsOn <= currentDate) ?  true : false;
    const button = document.createElement('button');
    button.innerHTML = element.name;
    //if it is invalid show the invalid cursor pointer
    if(!validTreasureHunt) {
        button.classList.add('invalid');
        button.id = 'invalidTH';
    }
    else {
        button.classList.add('valid');

    }
    button.classList.add('alertbutton');
    //put the treasure hunt buttons in the div
   containerElement.appendChild(button);
   //when user clicks we check if there is a current session running
        button.addEventListener('click', async function() {
            let huntName = button.textContent;
            console.log(huntName);
            if(validTreasureHunt) {
                await fetch("https://codecyprus.org/th/api/question?session=" + session).then(response => response.json())
                    .then(jsonObject => {
                        console.log(jsonObject);
                        //continue the quiz
                        if(jsonObject.completed == false){
                            window.location.href = "question.html?";
                        }
                        else{
                            //go to start page to register to start the quiz
                            window.location.href = "start.html?treasure-hunt-id=" + element.uuid;
                            localStorage.setItem("timeOfTH", element.maxDuration);
                        }
                    })
                    }
      });
});
});

