const arr=["neha" ,"supriya","priya","nitu","kiya"];
console.log(arr);


console.log("*********for loop")
// for loop
for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
}

console.log("*********while loop")
let i=0;
while(i<arr.length){
    console.log(arr[i])
    i++
}

console.log("*********for each")
arr.forEach((item, index, array)=>{
    console.log(item)
})
console.log('********* map')
arr.map((ele, index)=>{
    console.log(ele);
    return `${index} ${ele}`
})