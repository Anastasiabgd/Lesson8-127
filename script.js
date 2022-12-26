"use strict";

let element = new XMLHttpRequest();
element.addEventListener('load',function(){
    let receivedInfo = this.responseText;
    let receivedInfoJs = JSON.parse(receivedInfo);

    console.log(receivedInfoJs);

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'infoUl');

    const fragment = document.createDocumentFragment();
    receivedInfoJs.data.forEach(element => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = element.avatar;
    let p = document.createElement('p');
    p.textContent = element.first_name + " " + element.last_name;
    li.appendChild(img);
    li.appendChild(p);
    fragment.appendChild(li);
    
    ul.appendChild(fragment);
        
    });

    document.getElementById('info').appendChild(ul);


});
element.open('GET', 'https://reqres.in/api/users?page=2');
element.send();


// fetch
function getAllInfo(items) {
    fetch("https://reqres.in/api/unknown", {
    method: "GET", 
})

.then(function(infoInn){
    if(infoInn.status !== 200){
        throw infoInn.status;
    }
    return infoInn.json();

})

.then(function(infoInnJs){
    console.log(infoInnJs);

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'infoUl2');

    infoInnJs.data.forEach((elements) => {
        let li = document.createElement('li');
        li.textContent = `${elements.name}`;

        let color = elements.color;
        li.style.color = color;

        ul.appendChild(li);


    })

    document.getElementById('info').appendChild(ul);

})
.catch(function (error) {
    console.log(error);
    if (error == 404) {
      let p = document.createElement("p");
      p.textContent = "Page Not Found";

      document.getElementById("info").appendChild(p);
    } else {
      let p = document.createElement("p");
      p.textContent = "Server Error";

      document.getElementById("info").appendChild(p);
    }
  });

}

getAllInfo();

