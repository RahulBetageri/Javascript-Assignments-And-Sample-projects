function adhaarCard(name,age,country="indian"){
    this.name=name;
    this.age=age;
    this.country;
    this.displayInfo=function(){
        console.log("the name is"+this.name)
        console.log("the age is"+this.age)
        console.log("the country is"+this.country)
    }
}


var sachin=new adhaarCard('sachin',42)
var virat=new adhaarCard('virat',28)
var shewag=new adhaarCard('shewag',42)

sachin.displayInfo()
virat.displayInfo()
shewag.displayInfo()