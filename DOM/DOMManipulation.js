//Retrieve all by ID
var tag = document.getElementById("highlight");

//Retrieve all by ClassName
var tags = document.getElementsByClassName("bolded");

//Will retrieve all elements by Tag Name
var tags = document.getElementsByTagName("li");

//Returns the first element that matched a given CSS-Style Selector
//Select by ID
var tag = document.querySelector("#highlight");

//Returns ALL elements that match a given CSS-Style Selector
var lis = document.querySelectorAll("li");

//select the P tag
var para = document.querySelector("p");
//Retrieve the text Content:
para.textContent
//Alter the Text Content
para.textContent = "blah blah blah";

//Will not work, Attributes are set on individuals.
//But loop through it.
//links.setAttribute()
//will change all links on page to pink and orange
for(var i = 0; i < links.length; i++){
    links[i].style.background = "pink";
    links[i].style.color = "orange";
}
for(var i = 0; i <links.length; i++){
    links[i].setAttribute("href", "http://www.bing.com");
}