/*
array factors

Build a function that takes one array and finds all other elements of the array that are factors of its an element

Write a function that takes one parameter
Parameter 1 - an array of numbers
The function should return an object with multiple arrays in it, one for each non-repeating number in the input array
repeated numbers should not be added twice
Example:
arrayFactors([4,2,8,6,3,9]);
Output - { 4: [2], 2: [], 8: [4,2], 6: [2,3], 3: [], 9: [3] }
*/

function arrayFactors(array){
	var return_array = {};
	for(var i = 0; i<array.length; i++){
		return_array[array[i]] = [];
		for(var j = 0; j<array.length; j++){
			if(array[i]%array[j] === 0 && array[i] !== array[j]){
				return_array[array[i]].push(array[j]);
			}
		}
	}
	return return_array;
}

console.log(arrayFactors([4,2,8,6,3,9]));