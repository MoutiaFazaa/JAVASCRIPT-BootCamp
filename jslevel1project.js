var firstName = prompt("First name:");
var lastName = prompt("Last name:");
var age = prompt("Your age:");
var tall = prompt("enter your height en CM:");
var petName = prompt("what's your pet's name:");

if (lastName[lastName.length - 1] === firstName[firstName.length - 1] ){
    var fistCondition = true;
}
if(age<30 && age>20){
    var secondCondition=true;
}
if (tall>=170){
    var thirdCondition=true;
}
if(petName[petName.length - 1] ==="y"){
    var fourthCondition = true;
}

if (firstCondition=true && secondCondition === true && thirdCondition ===true && fourthCondition === true){
    alert("You are the spy !!!!")
}


