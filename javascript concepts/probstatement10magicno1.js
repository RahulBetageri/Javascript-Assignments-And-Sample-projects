function magicNumber(fN,sN,tN){
    if(fN=='13'){
        return 0;
    }

    if(sN=='13'){
        return fN;
    }

    if(tN=='13'){
        return fN+sN;
    }

    else{
        return 0;
    }
}





var fN=prompt("enter the first number")
var sN=prompt("enter the second number")
var tN=prompt("enter the third number")

var ok=magicNumber(fN,sN,tN)
console.log(ok)