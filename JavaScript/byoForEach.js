// var nums = [45, 65, 77, 34];

// nums.forEach(function(num){
//     console.log(num);
// });

// myForEach(nums, function(num){
//     console.log(num);
// });

function myForEach(arr, func){
    for(var i=0; i<arguments.length; i++){
        func();
    }
}
var colors = ["red", "orange", "Yellow"];

myForEach(colors, alert);