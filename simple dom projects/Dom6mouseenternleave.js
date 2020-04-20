document.getElementById("check").addEventListener("mouseenter",()=>
{
    document.getElementById("check").style.color="red"
    document.getElementById("check").style.backgroundColor="blue"
    document.getElementById("check").style.fontSize="50px"
})

document.getElementById("check").addEventListener("mouseleave",()=>
{
    document.getElementById("check").style.color="yellow"
    document.getElementById("check").style.backgroundColor="brown"
    document.getElementById("check").style.fontSize="25px"
})