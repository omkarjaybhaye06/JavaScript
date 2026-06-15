//Note run these commands in browser console of 3_DOM.html live server
document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className; //here use className instead of class
document.getElementById("title").getAttribute("id");
document.getElementById("title").getAttribute("class");
document.getElementById("title").setAttribute("class", "footer1"); //this will overide previous class by new class i.e heading1 by footer1
document.getElementById("title").setAttribute("class", "heading1 footer1"); //take both classes
document.getElementById("title");
const title1 = document.getElementById("title");

//query Selectors: allow you to select HTML elements using CSS selectors
document.querySelector("h1");
document.querySelector("h2");
document.querySelectorAll("h2");
document.querySelector("#title"); //to select id we use #
document.querySelector(".heading1"); //to select class we use .
document.querySelector('input[type="password"]'); //format to select input tags of css selectors

document.getElementById("ul"); // prints unordered list
const ul1 = document.getElementById("ul"); // stores in const ul1
ul1.querySelector("li"); //selects first list by default
ul1.querySelectorAll("li"); //selects all lists

const li1 = ul1.querySelector("li"); //slects first list and stores in variable li1
li1.style.backgroundColor = "blue"; //only first list bgc changes to blue
li1.style.padding = "3px solid red";
li1.innerText;
li1.innerText = "ten";

//getElementByClassName: it is method used to select all elements with a specific class name in the HTML document.
document.getElementsByClassName("list-item");
const temp1 = document.getElementsByClassName("list-item");
//temp1.forEach(function(li){console.log(li)}); //this will throw error asince forEach can't be used directly for getElementByClassName method to get loop, Array.from()is used
Array.from(temp1);
