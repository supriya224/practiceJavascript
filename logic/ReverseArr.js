const arr = [1, 6, 12, 9, 2, 9, 0];
var newArr = [];

function reverseArr(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    // console.log(str);
    newArr = newArr + arr[i];
  }
  return newArr;
}
reverseArr(arr)
console.log(arr)
console.log(newArr)
