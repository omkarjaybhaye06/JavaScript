// Accessing DOM Elements:
// Note:run document. command in browser as it will only support javascript DOM browser , not local Node.js environment in code editor.

//getElementById
const para = document.getElementById("title");
console.log(para.textContent); //prints learn DOM

const a = document.getElementById("myPara");
console.log(a.textContent); // "This is a paragraph."

//getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent);

//getElementsByClassName
const items = document.getElementsByClassName("item");

//querySelector and querySelectorAll
const h1 = document.querySelector("h1"); // first <h1>
const allParas = document.querySelectorAll("p"); // NodeList

//Modifying DOM Elemnents:

//Change text
para.textContent = "Updated text!";

//Change HTML
para.innerHTML = "<strong>Bold text</strong>";

//Change style
para.style.color = "red";
para.style.fontSize = "20px";

//Change Attributes
para.setAttribute("class", "highlight");

//Add/Remove Classes
para.classList.add("new-class");
para.classList.remove("old-class");
para.classList.toggle("hidden");

//Creating and Inserting elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new here!";
document.body.appendChild(newDiv);

//Insert at specific places:
document.body.insertBefore(newDiv, existingElement);

//Remove an element
existingElement.remove(); // modern
// or
existingElement.parentNode.removeChild(existingElement);

//Event Handling:
//onclick inline
<button onclick="alert('Clicked!')">Click me</button>;

//using js
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});

//Event object
btn.addEventListener("click", function (event) {
  console.log(event.target); // Element that triggered the event
});

//DOM Events:
//click, mouseover, keydown, submit, change, load
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  console.log("Form submitted!");
});

//Traversing the DOM:
//parent, child, sibblings
const element = document.querySelector("p");
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;
