/*
 sort objects by name

 Create a function, sort_object_list_by_name(), that does the following:

 Takes a list of objects, and returns an array of those objects, sorted by their property 'name'
 Input:

 input_array: an array of objects
 Output:

 output_array, an array sorted by the 'name' field of each object
 Example:

 var input_array =
 [
 {name: 'John', age:42, gender:'M'},
 {name: 'Jack', age:34, gender:'M'},
 {name: 'Michael',age:40, gender: 'M'},
 {name: 'Kendra',age:48, gender:'F'}
 ]
 output = find_factors(input_array); console.log(output); //outputs

 [
 {name: 'Jack', age:34, gender:'M'},
 {name: 'John', age:42, gender:'M'},
 {name: 'Kendra',age:48, gender:'F'},
 {name: 'Michael',age:40, gender: 'M'}
 ]
 */

function find_factors(input_array){
    let unsorted_name =  input_array.map(e=>e.name);
    for(let i = 0; i<unsorted_name.length; i++){
        let flag = true;
        for(let j = 0; j<unsorted_name.length-1; j++){
            if(unsorted_name[j] > unsorted_name[j+1]){
                let temp = unsorted_name[j+1];
                unsorted_name[j+1] = unsorted_name[j];
                unsorted_name[j] = temp;
                flag = false;
            }
        }
        if(flag){
            break;
        }
    }
    let return_array = [];
    for(let i = 0;i<unsorted_name.length;i++){
        for(let j = 0; j<unsorted_name.length; j++){
            if(unsorted_name[i]===input_array[j].name){
                return_array[i] = {};
                for(let property in input_array[j]){
                    return_array[i][property] = input_array[j][property];
                }
                break;
            }
        }
    }
    return return_array;
}


var input_array =
    [
        {name: 'John', age:42, gender:'M'},
        {name: 'Jack', age:34, gender:'M'},
        {name: 'Michael',age:40, gender: 'M'},
        {name: 'Kendra',age:48, gender:'F'}
    ]
output = find_factors(input_array); console.log(output); //outputs