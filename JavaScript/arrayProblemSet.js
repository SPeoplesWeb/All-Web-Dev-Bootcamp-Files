//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order
//Dont actually reverse the array itself

//Use a For Loop
//printReverse([1,2,3,4]);
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
printReverse([3,6,2,5]);

//Is Uniform
function isUniform(arr){
    //first item in the array
     var first = arr[0];
     //loop through the array and compare to the first item
     for(var i = 0; i <arr.length; i++){
         //if the next item isn't the same as the first, return false
         if(arr[i] !== first){
             return false
         }
     }
     //if all items match, return true
     return true;
}
//forEach wouldn't work here
//Because when it returns false in the FIRST function.. 
// function isUniform(arr){
//     var first = arr[0];
//     arr.forEach(function(element){
//         if(element !== first){
                //It will close when this return statement executes.
//             return false;
//         }
//     });
//     return true;
// }

//Write a sumArray() that acceps an array of numbers and
//Returns the sum of all numbers in the array
//***SUM ARRAY **
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

//max() that accepts an array of numbers and treturns the max number
//In the array

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}