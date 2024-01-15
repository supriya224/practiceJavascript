let arr= [1,2,4,5,7,1,2,7,8,8,4,4]
let data={};

for(let i=0; i<arr.length; i++){
    // console.log(arr);
    if(!data[arr[i]]){
        data[arr[i]]=1; // 

    }else{
        data[arr[i]]++;
    }
}
console.log(data)