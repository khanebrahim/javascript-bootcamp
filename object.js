// literal object
var point ={
    x:30,
    y:20
}
point.z=10
console.log(point)

//constructor
var obj =Object()
obj.a=10
console.log(obj)

var obj2 =new Object()
obj2.b=100
console.log(obj2)
console.log(point.x)
console.log(point.x + point.y)
console.log(point['x'])
var value='x'
console.log(point[value])
var dev ='x'
point[dev]=34
console.log(point)
delete point.x
console.log(point)
