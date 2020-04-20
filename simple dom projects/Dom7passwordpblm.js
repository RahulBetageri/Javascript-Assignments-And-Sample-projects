document.getElementById("btn").addEventListener("click",()=>
{
    var Pass=document.getElementById("pwd").value
    var conPass=document.getElementById("cpwd").value

    if(Pass==="" && conPass===""){
        alert("password and confirm password cannot be empty")

        document.getElementById("pwd").focus();

    }

    
    else if(Pass!==conPass){
        alert("password and confirm password are not matching")

        document.getElementById("pwd").focus();
        document.getElementById("cpwd").focus();
        document.getElementById("pwd").value=" ";
        document.getElementById("cpwd").value=" ";
        
    }
    else
    {
        alert("password and confirm password are matching")
    }

})