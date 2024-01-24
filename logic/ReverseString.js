

const str= "random"
var newStr= "";
function reverseString(str){
 for( var i=str.length-1; i>=0; i--){
    // console.log(str);
    newStr= newStr+str[i];
 }
 return newStr;
}
reverseString(str)
console.log(str)
console.log(newStr)
