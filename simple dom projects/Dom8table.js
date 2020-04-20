document.getElementById("btn").addEventListener("click",()=>
{
    var mob=document.getElementById("mob").value
    var lap=document.getElementById("lap").value
    var pen=document.getElementById("pen").value
    var car=document.getElementById("car").value

    var result=mob*100+lap*200+pen*300+car*400

    document.getElementById("check").value=result
    document.getElementById("res").innerHTML="the resultant value is:"+result
})