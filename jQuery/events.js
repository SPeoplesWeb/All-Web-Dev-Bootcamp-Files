// $("h1").click(function(){
//     alert("h1 clicked");
// });

// $("button").click(function(){
//     alert("You clicked a button");
// });

// $("button").click(function(){
//     $(this).css("background", "pink");
// })

// $("button").click(function(){
//     var text = $(this).text();
//     alert("You clicked " + text);
// });

//keyPress()
//listen for any keypress in any text input
// $('input[type="text"]').keypress(function(event){
//     console.log(event);
// });

//on()
//Prints when item with ID submit is clicked
$('h1').on('click', function(){
    //If there is many h1's, the $(this) will only fire when that
    //specific h1 is fired.
    $(this).css("color", "purple");
});

$("input").on("keypress", function(){
    console.log("Keypressed!");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});