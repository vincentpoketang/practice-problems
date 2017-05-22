/*
 Create a function, add_arrays(), that does the following:

 Input: 2 arrays of equal size

 first_array, an array of numbers
 needle array, an array of numbers
 Output:

 output array, which has all values from the first array added to the values from the second array
 Example:

 var first_array = [3,-5,15,4]; var second_array = [3,18,-5,-4]

 output = add_arrays(first_array,second_array); console.log(output); //outputs [6,13,10,0];
 */

 function add_arrays(first_array,needle_array){
     if(first_array.length !== needle_array.length){
         return "Arrays are not the same length";
     }
     else{
         let return_array = [];
         for(let i = 0; i<first_array.length; i++){
             return_array.push(first_array[i]+needle_array[i]);
         }
         return return_array;
     }
 }
var first_array = [3,-5,15,4]; var second_array = [3,18,-5,-4]

output = add_arrays(first_array,second_array); console.log(output); //outputs [6,13,10,0];