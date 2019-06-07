// var count = -10;
// var evenNum =10;
// var oddNum = 300;
// var divisibleNum = 5;


console.log("Print numbers between -10 and 19");
for(var count = -10; count <= 19; count++){
    console.log(count);
}
// while(count <= 19){
//     console.log(count);
//     count++;
// }
//----------------------------------------------------------------

console.log("Print even numbers between 10 and 40");
// for(var evenNum = 10; evenNum <=40; evenNum+=2){
//     console.log(evenNum);
// }
for(var evenNum = 10; evenNum <=40; evenNum+=1){
    if(evenNum % 2 === 0){
        console.log(evenNum);
    }
}

//--------------------------------------------------------------
console.log("Print all odd numbers between 300 and 333");
for(var oddNum= 300; oddNum <= 333; oddNum++){
    if(oddNum % 2 !== 0){
        console.log(oddNum);
    }
}


//---------------------------------------------------------------
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var divisibleNum = 5; divisibleNum <= 50; divisibleNum++){
    if(divisibleNum % 5 === 0 && divisibleNum % 3 ===0){
        console.log(divisibleNum);
    }
}
// while( divisibleNum <= 50){
//     if(divisibleNum % 3 === 0 && divisibleNum % 5 ===0){
//         console.log(divisibleNum);
//     } 
//     divisibleNum++
// }