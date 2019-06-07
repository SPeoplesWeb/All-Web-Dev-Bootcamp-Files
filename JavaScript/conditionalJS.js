var age = prompt("What age are you?");

// if(age < 10){
//     console.log("Sorry, you are not old enough to enter the venue");
// }

// // else if(age > 18 && age < 21){
// //     console.log("You can enter, but cannot drink");
// // }
// else if(age < 21){
//     console.log("You can enter, but cannot drink");
// }
// else{
//     console.log("Enjoy your night");
// }

if(age < 0){
    console.log("Please try again. No negatives allowed!");
};


if(age === 21){
    console.log("Happy 21st Birthday!");
}

if(age % 2 !== 0){
    console.log("Your age is odd!");
}
if(age % Math.sqrt(age) === 0){
    console.log(age + ": Your age is a perfect square!");
}