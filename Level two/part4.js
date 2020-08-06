var todo = prompt("choisir un action:");
var name = prompt("choose a name");
var arr=[];
var newArr=[];


//****************Fonctions*************
//add fonction:
function addName(name){
    let newarr=arr.push(name);
    console.log(arr);
}
//remove fonction:
function removeName(name){
    let newArr = arr.pop(name);
    console.log(newArr);
}
//display fonction:

//quit fonction

//********************* Fonction choice*/
if(todo==="add"){
    addName(name);
}else{
    removeName(name);
}
