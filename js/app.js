fetch("https://codecyprus.org/th/api/list").then(response => response.json()) //Parse JSON text to JavaScript object
.then(jsonObject => {
    console.log(jsonObject.treasureHunts); 
    //TODO - Success, do something with the data.
    const ul = document.getElementById("challenges");
    // var array = jsonObject[0].name;
    // console.log(array);
    let cD = new Date();  
    cD = cD.getTime();
    jsonObject.treasureHunts.forEach((element) => {
        
    // console.log(element);
    let valid = (element.startsOn <= cD) ?  true : false;
    const li = document.createElement('li');
    li.innerHTML = element.name;
    if(!valid) li.classList.add('invalid');
    li.classList.add('alertbutton');
    ul.appendChild(li);

    

      li.addEventListener('click', function() {
        let huntName = li.textContent; // Retrieve the inner text of the clicked element
        console.log(huntName);
        if(valid) alert("Starting treasure hunt " + huntName);
      });
});
});
 
