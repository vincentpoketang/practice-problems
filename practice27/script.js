/*
Recursive Numeric Spirals

Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

Write a recursive fibonacci sequence without looking one up
*/


function fib_seq(num){
  if(num===0){
    return [];
  }
  else if(num===1){
    return [0];
  }
  else if(num===2){
    return [0,1];
  }
  else{
    var array = fib_seq(num-1);
    array.push(array[array.length-1]+array[array.length-2]);
    return array;
  }
}

console.log(fib_seq(12));