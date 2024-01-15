let str="surpiya";
let arr= str.split("")
let start=0;
let end=arr.length-1

while(start<end){
    Swap(arr, start, end);
    start++;
    end--;
}

console.log(arr)
function Swap(){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp
}