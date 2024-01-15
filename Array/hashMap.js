let str = "helloriya";
let arr = str.split("");
let hashMap = {};

for (let i = 0; i < arr.length; i++) {
  if (!hashMap[arr[i]]) {
    hashMap[arr[i]] = 1;
  } else {
    hashMap[arr[i]]++;
  }
}

console.log(hashMap);

for(let el in hashMap){ // for in loop object ko iterte krne l liye
    console.log(el, hashMap[el])
}