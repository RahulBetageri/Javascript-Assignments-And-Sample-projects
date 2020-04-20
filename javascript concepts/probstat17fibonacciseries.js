function writeFibonacci(num){
    for (let index = 0; index < num; index++) {
        console.log(fibonacci(index))
        
    }
}

function fibonacci(num){
    var result
    if(num===0){
        result=0
    }
    
    else if(num===1){
        result=1
    }
    
    else {
         result=fibonacci(num-1)+fibonacci(num-2)
         
    }
    return result
    

}


var num=prompt("enter the number")
writeFibonacci(num)
