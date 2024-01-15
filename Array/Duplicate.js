let arr= [1,2,4,5,7,1,2,7,8,8,4,4]
let data={};
let duplicateArr=[]
let count =0

for(let i=0; i<arr.length; i++){
    // console.log(data);
    if(!data[arr[i]]){
        data[arr[i]]=1; // 

    }else{
        data[arr[i]]++;
    }
}

//  time complexity o(n)
console.log(data)
for(let el in data){
    console.log(el)
    if(data[el]>1){
        duplicateArr.push(el)
        count++ // sbse bdi element key ko reperesent krne k liye
    }
}
console.log(count, duplicateArr)