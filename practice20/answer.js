/*
 randomize array

 Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

 Input:

 input_array: an array of anything
 Output:

 output_array, the original array, randomly arranged
 Example:

 var input_array =
 [5,3,2,5,1]
 output = randomize_list(input_array); console.log(output); //outputs

 [3,1,5,5,2]
 console.log(randomize_list(input_array)); //outputs

 [1,3,5,1,2,5]
 */
 function randomize_list(array){
     var newArray = [];
     while(array.length!==0){
         var randomArrayIndex = Math.floor(Math.random()*array.length)
         newArray.push(array[randomArrayIndex]);
         array.splice(randomArrayIndex,1);
     }
     return newArray;
 }
var input_array = [5,3,2,5,1];
output = randomize_list(input_array); console.log(output); //outputs

input_array = [3,1,5,5,2];
console.log(randomize_list(input_array)); //outputs