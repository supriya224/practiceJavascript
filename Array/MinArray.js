let arr = [23, 56, 200, 10, 1, 34];
let min = 20;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= min) {
    min = arr[i];
  }
}
console.log(min);
