var btnp1 = document.querySelector("#p1");
var btnp2 = document.getElementById("p2");
var reset = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var maxScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

btnp1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            p1display.classList.add("winner");
            gameOver = true;
        }
        p1display.textContent = p1score;
    }
});

btnp2.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            p2display.classList.add("winner");
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
});

reset.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    maxScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}