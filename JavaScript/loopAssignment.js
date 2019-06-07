var count = -10;
var evenNum =10;
var oddNum = 300;
var divisibleNum = 5;

console.log("Print numbers between -10 and 19");
while(count <= 19){
    console.log(count);
    count++;
}

console.log("Print even numbers between 10 and 40");
while(evenNum <= 40){
    console.log(evenNum);
    evenNum+=2;
}

// console.log("Print all odd numbers between 300 and 333");
// while(oddNum <= 333){
//      console.log(oddNum);
//      oddNum+=3;
//  }

 console.log("Print all odd numbers between 300 and 333");
 while(oddNum <= 333){
     if(oddNum % 2 !==0){
         console.log(oddNum);
     }
     oddNum+=1;
 }

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while( divisibleNum <= 50){
    if(divisibleNum % 3 === 0 && divisibleNum % 5 ===0){
        console.log(divisibleNum);
    }
    divisibleNum++
}