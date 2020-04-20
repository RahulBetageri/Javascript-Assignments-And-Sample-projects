var userName=prompt("enter the username")
var agentName=prompt("enter the agent name")
var luckyNumber=prompt("enter the lucky number")
var favDish=prompt("enter the fav dish")

var userCondition=false
var agentCondition=false
var luckyCondition=false
var favCondition=false

if(userName.charAt(0)=='d'){
    userCondition=true;
}

if(agentName.charAt(agentName.length-1)=='p'){
    agentCondition=true;
}

if(luckyNumber>=7){
    luckyCondition=true;
}

if(favDish.length>=7){
    favCondition=true;
}

if(userCondition && agentCondition && luckyCondition && favCondition){
    console.log(userName+"is a agent")
    console.log("pls kill 20 ppl")
}

else{
    console.log(userName+"is not agent")
}