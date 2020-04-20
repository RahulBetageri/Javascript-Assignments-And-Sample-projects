//normal method
var array=[2,3,5,8,9]
console.log("the elemnts of array are"+ array);

var modifiedArray=[]
array.forEach(element => {
    modifiedArray.push(element*element)
});

console.log(modifiedArray)



//map method
var array=[2,3,5,8,9]
console.log("the elemnts of array are"+ array);
var modifiedArray=[]
var modifiedArray=array.map(data=>data*data)
console.log(modifiedArray)