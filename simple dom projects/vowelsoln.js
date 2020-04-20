document.getElementById("btn").addEventListener("click",()=>{
    var position=0;

    var vowel=document.getElementById("check").value
    var v=vowel.toLowercase()

    for (let index = 0; index < v.length; index++) {

        if(v.charAt(index)=="a"||v.charAt(index)=="e"||v.charAt(index)=="i"||v.charAt(index)=="u"||v.charAt(index)=="o")
        {
            position=index+1;
            break
        }

        if(position>=0)
        {
            document.getElementById("res").innerHTML="the position of vowel is:"+position
            document.getElementById("res").style.color="green"
        }
        else{
            document.getElementById("res").innerHTML="the vowel is not present"
                        document.getElementById("res").style.color="red"  
        }
        
    }
})