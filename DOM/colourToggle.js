var button = document.querySelector("button");
var isPurple = false;
//Set up the listener
// button.addEventListener("click", function(){
//     this.style.background = "purple";
// });

//Set up listener
// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//     }
//     else{
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

//OR using the classList Method using CSS...
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
