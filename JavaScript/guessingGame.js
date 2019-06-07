//create secretNumber
var secretNumber = 4;
//ask user for guess
//Number(prompt) or Number(guess) will check for the Number of guess
//not the string
//Load up the stringGuess
var stringGuess = prompt("Guess a number");

//assign the string and parse for Number value
var guess = Number(stringGuess);

//check guess is right
if(guess === secretNumber){
    alert("You got it right!");
}

//otherwise, check if higher
else if(guess > secretNumber){
    alert("Too high, guess again");
}

else{
    alert("Too low, guess again!");
}
//otherwise, check if lower - using an extra else if()
// else if(Number(guess) < secretNumber){
//     alert("Too high, guess again");
// }

//otherwise, you got it wrong
// else{
//     alert("Wrong!");
// }
