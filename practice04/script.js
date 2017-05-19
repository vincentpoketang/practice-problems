/**
 * Created by Vincent on 5/19/2017.
 */
/*
 Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

 Write a function that takes one parameter
 Parameter 1 - An Array of strings
 The function should output an array containing all the strings from the input array but in alphabetical order
 Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
 sort(myArray);
 Output - ['cat', 'dog', 'human', 'mouse']
 Try doing this using a Bubble Sort, if you are unsure what that is Click Here
 */
function sort(strArray){
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (let i = 0; i < strArray.length - 1; i++) {
            if (strArray[i] > strArray[i + 1]) {
                let temp = strArray[i];
                strArray[i] = strArray[i + 1];
                strArray[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return strArray;
}
var myArray = ['mouse', 'cat', 'dog', 'human'];
console.log(sort(myArray));