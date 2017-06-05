/*
Given the following function call:

permutations('abc');
And the resulting output:

["abc", "acb", "bac", "bca", "cab", "cba"];
Create a function definition that achieves the output with the given input.
*/
function permtuations(str){
  if(str.length===1){
    return [str];
  }
  else{
    var strArray = permtuations(str.substring(1));
    var newArray = [];
    for(var i = 0; i< strArray.length; i++){
      for(var j = 0; j<=strArray[i].length; j++){
        var newString = strArray[i].substring(0,j)+str[0]+strArray[i].substring(j);
        newArray.push(newString);
      }
    }
    return newArray;
  }
}
console.log(permtuations('abcde'));