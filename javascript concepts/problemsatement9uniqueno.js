function uniqueData(array){
var firstData=array[0]
    for (let index = 1; index < array[index]; index++) {
        if(firstData!=array[index]){
            return false
        }
        
    }
    return true
}



var size=prompt("enter the size of array")
var array=new Array(size)
for (let index = 0; index < size ; index++) {
    array[index]=prompt("enter the elemnts of array");
    
}
var ok=uniqueData(array)

if(ok){
    console.log("numbers are unique")
}
else{
    console.log("numbers are not unique")
}    
