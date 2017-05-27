/*
numeric_toggles

Given the following function call:

numeric_toggles(2);
And the resulting output:

[4, 6, -9, -12, 16, 20, -25, -30];
Create a function definition that achieves the output with the given input.
*/

var numeric_toggles = (num, num2, num3)=>{
	let neg = 1;
	let count = 0;
	let return_array = [];
	let total = 0;
	for(let i = 0; i<num2; i++){
		for(let j = i; j<num+i; j++){
			return_array.push((num+i)*(num+j)*neg);
			if(count >= num3){
				total += (num+i)*(num+j)*neg;
			}
			count++;
		}
		neg*=-1;
	}
	return {array:return_array,total_num:total};
}
console.log(numeric_toggles(2,4,5));