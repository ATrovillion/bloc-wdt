// Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.

var listItem = document.createElement("li");
var text = document.createTextNode("Mens T-shirt")
listItem.appendChild(text);

let firstShirt = document.getElementById('list');
firstShirt.appendChild(listItem);