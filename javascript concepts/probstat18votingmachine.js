function calclateAge(year){
    return new Date().getFullYear()-year
}

function votingRights(age){
    if(age>=18){
        console.log("you hav voting rights")
    }
    else{
        console.log("you dont have voting rights")
    }
}





var dob=[1965,1976,1989,2003,2016]
var displayData=[]

function displayInfo(array,fn){
    array.forEach(element => {

        displayData.push(fn(element))
        
    });
}

displayInfo(dob,calclateAge)
console.log(displayData)

displayInfo(displayData,votingRights)