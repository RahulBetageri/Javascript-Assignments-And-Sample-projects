var set=new Set()
set.add("Sachin")
set.add("Dravid")
set.add("Virat")
set.add("Raina")

var ok=set.has("Raina")
console.log(ok)

var ok=set.has("dravid")
console.log(ok)

var ok=set.has("Dravid")
console.log(ok)
if(ok){
    set.delete("Dravid")
}

console.log(set.size)

set.clear()

var setkeys=set.keys()
console.log(setkey)
for (var key of setkeys) {
    console.log(key)
}