// let arr = [23, 13, 56, 78, 12, 90, 26];
// let ele = 25;
// let result = [];
function twoSum(arr, ele) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === ele) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
}
let two = twoSum([23, 13, 56, 78, 12, 90, 26],25);

console.log(two);
