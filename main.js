let str1 = process.argv[2];
let str2 = process.argv[3];

function test(str1,str2) {
let dict = {};
for(let i of str1) {
  if(dict.hasOwnProperty(i)) {
    return false;
  }
  for(let j of str2) {
    dict[i]=j;
  }
}
return true;
}
console.log(test(str1,str2));
