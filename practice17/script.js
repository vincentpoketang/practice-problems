/**
 * Created by Vincent on 5/21/2017.
 */
/*
 skippy_numbers

 Given the following function call:

 skippy_numbers(2);
 And the resulting output:

 [2,3,5,6,8,9,11,12];
 Create a function definition that achieves the output with the given input.
 */

function skippy_numbers(num){
    var return_array = [];
    var count = 0;
    while(return_array.length !== 8){
        if(count !== 2){
            return_array.push(num);
            count++;
        }
        else{
            count = 0;
        }
        num++;
    }
    return return_array;
}

console.log(skippy_numbers(3));