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
let cookies = document.cookie;
console.log(cookies);
let session = getCookieValue("session");
console.log(session);

fetch("https://codecyprus.org/th/api/list").then(response => response.json())
.then(jsonObject => {
    console.log(jsonObject.treasureHunts);
    //TODO - Success, do something with the data.
    const container = document.getElementById("challenges");
    // var array = jsonObject[0].name;
    // console.log(array);
    let cD = new Date();
    cD = cD.getTime();
    jsonObject.treasureHunts.forEach((element) => {

    // console.log(element);
    let valid = (element.startsOn <= cD) ?  true : false;
    const button = document.createElement('button');
    button.innerHTML = element.name;
    if(!valid) {
        button.classList.add('invalid');
        button.id = 'invalidTH';
    }
    else {
        button.classList.add('valid');

        //button.addEventListener('onclick',buttonConfirmation);
    }
    button.classList.add('alertbutton');
   container.appendChild(button);
        button.addEventListener('click', async function() {
            let huntName = button.textContent;
            console.log(huntName);
            if(valid) {
                await fetch("https://codecyprus.org/th/api/question?session=" + session).then(response => response.json())
                    .then(jsonObject => {
                        console.log(jsonObject);
                        if(jsonObject.completed == false){
                            window.location.href = "question.html?";
                        }
                        else{
                            window.location.href = "start.html?treasure-hunt-id=" + element.uuid;
                            localStorage.setItem("timeOfTH", element.maxDuration);
                        }
                    })
                    }
      });
});
});

