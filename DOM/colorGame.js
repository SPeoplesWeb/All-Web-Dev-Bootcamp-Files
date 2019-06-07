/***********************************************************************
 * THIS CODE IS REFACTORED. PLEASE CHECK colorGameold.js for original 
 * *********************************************************************/
//Declare number of squares in game.
 var numSquares = 6;
//Pick random colors
var colors = [];
//Pick one color
var pickedColor;

//Selects all divs with class .square
var squares = document.querySelectorAll(".square");
//Define the colorDisplay element
var colorDisplay = document.getElementById("colorDisplay");
//Define the message element
var messageDisplay = document.querySelector("#message");
//Define the H1
var h1 = document.querySelector("h1");
//Define the reset button
var resetButton = document.querySelector("#reset");
//This is refactoring var easyBtn and var hardBtn
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //Set up Modes - Easy and Hard/Listeners
    setUpModeButton();
    //Set up Squares - Color listeners etc.
    setUpSquares();
    reset();
}

function reset(){
        //Generate all new colors;
        colors = generateRandomColors(numSquares);
        //Pick a new random color from array;
        pickedColor = pickColor();
        //change text in colorDisplay to display the pickedColor
        colorDisplay.textContent = pickedColor;
        //Update text content of button to New Colors when reset is pressed.
        resetButton.textContent = "New Colors";
        //Remove the try again or correct message when reset is pressed
        messageDisplay.textContent = "";
        //change colors of squares
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                //Show all squares
                squares[i].style.display = "block";
                //Changes color of squares
                squares[i].style.backgroundColor = colors[i];
            }
            else{
                //If Easy mode is picked, hide bottom 3 squares
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
    //Refactored to reset(); when we created the reset() function
    reset();
});

function changeColors(color){
    //Loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    //Change each color to match given color
}

//Define pickColor - This will randomise the RGB number to be selected
//From the colors array defined up top.
function pickColor(){
    //Pick a random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Define generateRandomColors function
function generateRandomColors(num){
    //Make an Array
    var arr = [];
    //Add num random colors to array
    for(var i = 0; i <num; i++){
        //Get random color and push into the array.
        //Being called for functionRandomColor()
        arr.push(randomColor())
    }
    //Return that array
    return arr;
}

function randomColor(){
    //Pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    //Space between commas MUST be there
    return "rgb(" + r + ", " +  g + ", " + b + ")";
}

function setUpModeButton(){
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i <squares.length; i++){
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                //Change the h1 background when correct color is picked
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });   
    }
}