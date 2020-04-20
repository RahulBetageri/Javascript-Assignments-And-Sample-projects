function inteeviewQuestion(){
    if (job==='trainer'){
        return function(name){
            console.log(name+" "+"what do u teach")
        }
    }

    else if (job==='designer'){
        return function(name){
            console.log(name+" "+"what do u design")
        }
    }

    else {
        return function(name){
            console.log(name+" "+"what do u do")
        }
    }
}

var myInterview=inteeviewQuestion('trainer')
myInterview('sachin')
myInterview('dravid')

var myInterview=inteeviewQuestion('designer')
myInterview('kohli')
myInterview('shewag')