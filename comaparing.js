var obj1 ={
    a:20,
    b:19
}

var obj2 ={
    a:20,
    b:19
}
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))
console.log('a' in obj1) //find properties
for (var i in obj2){
    console.log(i)
    console.log(i+':'+obj2[i])
}
console.log(Object.keys(obj2))
