/*
factor_of_sequence

Given the following function call:

factor_of_sequence(2);
And the resulting output:

[0,3,0,0,6,0,0,9,0,0,12];
Create a function definition that achieves the output with the given input.
*/
function factor_of_sequence(num){
  var output=[];
  for(var i=num;i<12;i++){
    if(i%3!==0){
      output.push(0);
    }
    else{
      output.push(i);
    }
  }
  return output;
}
console.log(factor_of_sequence(2));