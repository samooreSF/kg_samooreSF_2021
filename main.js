
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
}
