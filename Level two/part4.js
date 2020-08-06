var arr=["ali", "jamila"];
var newArr=[];


//****************Fonctions*************
//add fonction:
function addName(){
    let newarr=arr.push(name);
    console.log(arr);
}
//remove fonction:
function removeName(){
    var index = arr.indexOf(name);
    arr.splice(index,1);
    console.log(arr);
}
//display fonction:
function display(){
    console.log(arr)
}
//quit fonction

//********************* Fonction choice*/

var name = prompt("choose a name:");
var todo = "empty";
todo = prompt("choisir un action:");

while(todo!=="quit"){

if(todo==="add"){
    addName()
}else if(todo==="remove"){
    removeName()
}else if(todo==="display"){
    display()
}else{
    alert("We will quit, your choice is invalable!")
    todo="quit"
}
todo= "quit";


}

alert("thank you for using our app, refresh the page to do it again :D !")

