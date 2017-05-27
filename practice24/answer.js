/*Create a function, matrix_add(), that does the following:

Input:

array1: a multi-dimensional array
array2: a multi-dimensional array
Output:

output: a multi-dimensional array
Example:

var array1 = [ [1,2,3], [3,4,5], [6,7,8] ] var array2 = [ [1,2,3], [1,2,3], [1,2,3] ]

output = matrix_add(array1,array2); console.log(output); //outputs [ [2,4,6], [4,6,8], [7,9,11] ]

Put your solution in answer.js*/

function matrix_add(array1,array2){
  if(array1.length!==array2.length){
    return false;
  }
  var return_array = [];
  for(var i = 0; i<array1.length;i++){
    return_array.push([]);
    for(var j = 0; j<array1[i].length; j++){
      return_array[i][j] = (parseInt(array1[i][j])+parseInt(array2[i][j]));
    }
  }
  return return_array;
}
var array1 = [ [1,2,3], [3,4,5], [6,7,8] ]; var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];

output = matrix_add(array1,array2); console.log(output); //outputs [ [2,4,6], [4,6,8], [7,9,11] ]
