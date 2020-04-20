var map1=new Map
map1.set(10,'sachin')
map1.set(10,'sachin tendulkar')

console.log(map1)
console.log(map1.get(10))
console.log(map1.get(10))

console.log(map1.has(10))
console.log(map1.get('sachin'))

map1.set('virat','anuskha')
map1.set('dhoni','sakshi')
console.log(map1.get(virat))
console.log(map1.get(anushka))

var ok=map1.has('virat')
if(ok){
    map1.delete('virat')
}
console.log(map1)


map1.clear()


console.log(map1.size)

var mapvalues=map1.values()
console.log(mapvalues)
for (var key1 of mapvalues) {
    console.log(key1)
}

    


    var mapvkey=map1.keys()
    console.log(mapvkey)
    for (var key2 of mapvkey) {
        console.log(key2)
    }

//we can write map in formof array

