function cricketer(firstName,lastName,dob,country,isMarried){
    this.firstName=firstName,
    this.lastName=lastName,
    this.dob=dob,
    this.country=country,
    this.isMarried=isMarried,

    this.calculateAge=function(){
        this.age=2019-this.dob
    }
}

var virat=new cricketer('virat','kohli',1970,'india',true)
virat.calculateAge()
console.log(virat)

var sachin=new cricketer('sachin','tensukkar',1975,'india',true)
sachin.calculateAge()
console.log(sachin)