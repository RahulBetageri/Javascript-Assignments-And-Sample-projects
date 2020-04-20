//normal method
var array=[2,3,4,5,6]
console.log("the elemnts of array are"+ array);
var modifiedData=0
array.forEach(element => {
    modifiedData=modifiedData+element
});
console.log(modifiedData)



//reduce method
var array=[2,3,4,5,6]
console.log("the elemnts of array are"+ array);

var modifiedData=array.reduce((data1,data2)=>data1+data2)
console.log(modifiedData)