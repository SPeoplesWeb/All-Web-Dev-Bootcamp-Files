//Check off Specific to dos by clicking
//Use on. Because it will add the function to all potential future elements
//And not just the ones already on the page
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    //Will stop event bubbling. (Like nested elements ->Span->LI->UL-DIV)
    event.stopPropagation();
    
});

$("input[type='text']").keypress(function(e){
    //"which" corresponds to the key that was pressed
    if(e.which === 13){
        //Grabs new todo text from input
        var todoText = $(this).val();
        //clear the input - Setter
        $(this).val("");
        //Create a new LI and add to UL
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$('.fa-plus').click(function(){
    $('input').fadeToggle();
})