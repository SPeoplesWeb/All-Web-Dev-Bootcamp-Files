var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
        //make sure that a dog barks, and a cat meows
        //not the other way about.
        //prevents namespace collision.
    }
}
obj.add(10,5);

//keyword - THIS
var comments = {};

comments.data = ["good job", "bye", "lame"];

comments.print = function(){
    this.data.forEach(function(el){
    console.log(el);
    });
}