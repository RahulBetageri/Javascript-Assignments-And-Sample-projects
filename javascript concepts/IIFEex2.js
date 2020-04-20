var gameInfo=(function(){
    var number=(Math.floor)(Math.random()*10)
    console.log(number)

    var result=number>=5?"winner":"looser"
    console.log(result)

   return{
       gameResult:{
           gameNumber:number,
           gameresult:result
       }

       return {
           number,
           result
       }
   }
})

()

console.log(gameInfo.gameResult.gameNumber)
console.log(gameInfo.gameResult.gameresult)

console.log(gameInfo.number)
console.log(gameInfo.result)
