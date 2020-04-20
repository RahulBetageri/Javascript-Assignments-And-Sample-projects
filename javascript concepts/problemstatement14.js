//normal method
var array=[2,3,5,8,9]
console.log("the elemnts of array are"+ array);

var modifiedArray=[]
array.forEach(element => {
    modifiedArray.push(element*2)
});

console.log(modifiedArray)



//map method
var array=[2,3,5,8,9]
console.log("the elemnts of array are"+ array);
var modifiedArray=[]
var modifiedArray=array.map(data=>data*2)
console.log(modifiedArray)