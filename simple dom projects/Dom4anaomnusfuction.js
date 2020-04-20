document.getElementById("btn").addEventListener("click", function(){

    var fD=document.getElementById("firstNumber").value
    var sD=document.getElementById("secondNumber").value
    var result=Number(fD)+Number(sD)
    
    document.getElementById("ans").innerHTML="the added result is"+result
    })