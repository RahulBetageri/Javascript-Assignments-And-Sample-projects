document.getElementById("btn").addEventListener("dblclick",()=>
{
    document.getElementById("ans").innerHTML="the curent date is"+ new Date().getFullYear()

    document.getElementById("ans").style.color="red"
    document.getElementById("ans").style.backgroundColor="blue"
    document.getElementById("ans").style.fontSize="50px"
    
})