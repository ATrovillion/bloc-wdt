//Using the code from the prior checkpoint, add an Event Handler to the <li> element
//and console.log() the name of the shirt they selected.

var listItem = document.createElement("li");
var text = document.createTextNode("Mens T-shirt")
listItem.appendChild(text);

let firstShirt = document.getElementById('list');
firstShirt.appendChild(listItem);


listItem.onclick = function(event) { console.log(text.substringData(0,12)); };

let jacket = document.querySelector('li');

jacket.onclick = function(event) {console.log(jacket.innerHTML)};





