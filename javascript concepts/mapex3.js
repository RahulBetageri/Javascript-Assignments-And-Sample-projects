var map=new Map([[1,'sachin'],[2,'shewag'],[3,'dravid']])  //arrayformat
console.log(map.get(3))


var ok=map.has(3)
console.log(ok)
var ok=map.has(4)
console.log(ok)

var mapvalues=map.values()
console.log(mapvalues)
for (var key1 of mapvalues) {
    console.log(key1)
}

    
var mapvkey=map.keys()
console.log(mapvkey)
for (var key2 of mapvkey) {
    console.log(key2)
}


var mapentries=map1.entries()
console.log(mapentries)
for (var entries of mapentries) {
    console.log(entries)
}


var mapentries=map1.entries()
console.log(mapentries)
for (var [keys,values] of mapentries) {
    console.log("the keys are"+keys+"the values are"+values)
}