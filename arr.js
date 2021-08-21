var arr =[4,5,31,45,56,90,35,89,91,96];
// var sum = 0;
// for(var i=0; i<arr.length; i++)
// sum += arr[i];
// console.log(sum);
// 
// for(var i=0; i<arr.length; i++)
// if((arr[i]%2==0))
// console.log(arr[i]);
// arr.splice(1,0,12,52,51)
// arr.splice(1,6,44,23,24,12,67,45)
// console.log(arr)
// var find =91;
// var isFind = false
// for(var i=0; i<arr.length; i++){
    // if(arr[i]==find){
        // 
// console.log('data found index: ' + i)
// isFind=true
// break;
    // }
// 
// }
// if(!isFind)
// console.log('data not found')
for(var i=0; i<(arr.length/2); i++){
    var temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp

}
console.log(arr)