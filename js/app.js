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
        button.disabled = true;
    }
    else {
        button.classList.add('valid');
    }
    button.classList.add('alertbutton');
   container.appendChild(button);
   

      button.addEventListener('click', function() {
        let huntName = button.textContent;
        console.log(huntName);
        if(valid) alert("Starting treasure hunt: " + huntName);
        window.location.href = "start.html?treasure-hunt-id=" + element.uuid;
        localStorage.setItem("timeOfTH", element.maxDuration);
      });
});
});
 

