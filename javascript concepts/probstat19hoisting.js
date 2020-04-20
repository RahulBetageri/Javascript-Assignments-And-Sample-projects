//1
var data=35

function incrementData(data){
    data=data+1
}

console.log("before increment"+data)
incrementData(data)
console.log("after increment"+data)



//2
var data=35

function incrementData(data){
    data=data+1
    console.log("incremented value"+data)
}

console.log("before increment"+data)
incrementData(data)
console.log("after increment"+data)


//3
var data=35

function incrementData(data){
    return data=data+1
}

console.log("before increment"+data)
incrementData(data)
console.log("after increment"+data)