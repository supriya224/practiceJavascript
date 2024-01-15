let arr = [23, 56, 12, 8, 2, 90, 100];
let el = 14;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === el) {
    count++;
  }
}
if(count<1){
    console.log("no element present is this")
}else{
    console.log(`yes element is present in ${count}`)
}
