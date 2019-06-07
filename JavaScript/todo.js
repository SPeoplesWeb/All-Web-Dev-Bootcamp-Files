 window.setTimeout(function(){
 var todos = ["Buy New Turtle"];
 var input = prompt("What would you like to do?");

while(input !== "quit"){
     //Handle Input
     if(input === "list"){
        listTodos(); 
    }
    else if(input === "new"){
        addTodos();
    }
    else if(input === "delete"){
        deleteTodo();
    }
    var input = prompt("What would you like to do?");
}
 console.log("Okay, bye!");


 function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
   console.log("**********");
 }

 function addTodos(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
   
    //Add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
 }

 function deleteTodo(){
    //Ask for index of todo to be deleted.
    var index = prompt("Enter index of todo to delete");
        
    //Delete that todo
    //Splice()
    todos.splice(index, 1);
    console.log("Deleted Todo");
}

//var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red", "orange", "yellow", "green"];

// numbers.forEach(function(color){
//   if(color% 3 === 0) {
//    console.log(color);
//   }
// });
 }, 500);