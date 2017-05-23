/*
Create a function, find_factors(), that does the following:

Find all of the factors of a given number
Input:

factor_number: a number to find the factors of
Output:

output array, an array of all numbers that are a factor of factor_number
Example:

var factor_number = 10;

output = find_factors(factor_number); console.log(output); //outputs [1,2,5,10];

Put your solution in answer.js

hint: use modulo to determine if a number is evenly divisible by another number
*/

function find_factors(factor_number){
	var return_array = [];
	for(var i = 1; i<=factor_number; i++){
		if(factor_number%i === 0){
			return_array.push(i);
		}
	}
	return return_array;
}

var factor_number = 10;

output = find_factors(factor_number); console.log(output); //outputs [1,2,5,10];