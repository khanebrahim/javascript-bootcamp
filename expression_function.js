var addition = function(a,b) {
    return a + b
}
addition(40,10)

setTimeout(function() {
   console.log("I will call after 5 second")
},5000)

var another = addition
console.log(another(12,23))

