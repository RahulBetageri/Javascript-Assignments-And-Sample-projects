var array=[
    {name:'kgf', isWatched:true, isHit:true},
    {name:'war', isWatched:false, isHit:true},
    {name:'joker', isWatched:false, isHit:false}
]
bookMyShow(array)

function bookMyShow(array){
    var result=" "

    array.forEach(movie => {
        if(movie.isWatched==true){
            result="i have watched"
        }
        else{
            result="i havent watched"
        }
                result=result+movie.name

                if(movie.isHit==true){
                    result="Movie is hit"
                }
                else{
                    result="movie is not hit"
                }
                console.log(result)
    });
}