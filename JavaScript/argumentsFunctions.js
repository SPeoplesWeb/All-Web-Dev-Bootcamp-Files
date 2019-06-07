//isEven
// function isEven(num){
//     //return true if even
//     if(num % 2 === 0){
//         return true;
//     }
//     //return false otherwise
//     else{
//         return false;
//     }
// }
// OR V V V
function isEven(num){
    return num % 2 === 0;
}

function factorial(num){
    //Define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 1; i >= 1; i--){
        result = result * i;
    }

    //return the result variable
    return result;
    //factorial(4) 4x3x2x1
}

//kebabToSnake()
function kebabToSnake(str){
    //replace all '-' with '_''s
    var newStr = str.replace(/-/g , "_");
    //return str
}