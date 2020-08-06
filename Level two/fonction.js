function addNum(num1,num2){
    console.log(num1+num2);
}
function sleepIn(weekday,vacation){
    if(weekday===false && vacation===false){
        return true
    }
    else if(weekday===true && vacation===false){
        return false
    }
    else if(weekday===false && vacation===true){
        return true
    }
    else{return 0}
}
