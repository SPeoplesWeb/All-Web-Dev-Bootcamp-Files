var lis = document.querySelectorAll("li");

//Loop through all LI's
for(var i = 0; i <lis.length; i++){
    //each individual LI
    lis[i].addEventListener("mouseover", function(){
    //refers to the item/element that the event was triggered on (this)
        this.classList.add("selected");
        // this.style.color = "green";
    });

    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        // this.style.textDecoration = "line-through";
        this.classList.toggle("done");
    });
}
