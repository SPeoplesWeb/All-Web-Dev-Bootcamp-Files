var numSquares = 6;
//Pick random colors
var colors = generateRandomColors(numSquares);
//Selects all divs with class .square
var squares = document.querySelectorAll(".square");
//Pick one color
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
//Define the H1
var h1 = document.querySelector("h1");
//Define the reset button
var resetButton = document.querySelector("#reset");
//This is refactoring var easyBtn and var hardBtn
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

//**************************REFACTORED CODE******************************* */
//Refactoring easyBtn and hardBtn EventListeners
//this will loop through all button classes.
//Will help if we decide to add a third difficulty...

init();

function init(){

}
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //Figure out how many squares to show

        // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        //If easy button is selected only show 3 numSquares
        //Otherwise show 6 numSquares
        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else{
            numSquares = 6;
        }
        reset();
    });
}
function reset(){
        //Generate all new colors;
        colors = generateRandomColors(numSquares);
        //Pick a new random color from array;
        pickedColor = pickColor();
        //change colorDisplay to match picked Color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
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
//*************************PREVIOUS CODE******************************** */
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     //Declare numSquares, so that when we click reset button
//     //We want to make sure that only 3 are generated
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     //Loop through the colors
//     for(var i = 0; i < squares.length; i++){
//         //If there is a color at the index
//         if(colors[i]){
//             //If there is, change the colors of the first 3.
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             //Hide the other 3 colors
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     //Loop through the colors
//     for(var i = 0; i < squares.length; i++){
//         //If there is a color at the index

//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    //Refactored to reset(); when we created the reset() function
    reset();

    //***************PREVIOUS CODE *************************** */
    // //Generate all new colors;
    // colors = generateRandomColors(numSquares);
    // //Pick a new random color from array;
    // pickedColor = pickColor();
    // //change colorDisplay to match picked Color
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    // messageDisplay.textContent = "";
    // //change colors of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
});
//change text in colorDisplay to display the pickedColor
colorDisplay.textContent = pickedColor;

//For () Loop to loop through all square divs and add a background color
//from the variable colors above.
for(var i = 0; i <squares.length; i++){
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
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