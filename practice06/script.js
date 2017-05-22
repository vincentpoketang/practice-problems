/**
 * Created by Vincent on 5/19/2017.
 */
/*
 Numeric Spirals

 Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

 Write a function that takes one parameter
 Parameter 1 - A number
 The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
 Example:
 fibSequence(12);
 Output - 0 1 1 2 3 5 8 13 21 34 55 89
 If you are unfamiliar with the Fibonacci sequence Click Here
 */

function fibSequence(num){
    let fibArray = [0 , 1];
    console.log(fibArray[0]);
    console.log(fibArray[1]);
    for(let i = 2; i < num; i++){
        fibArray.push(fibArray[i-1]+fibArray[i-2]);
        console.log(fibArray[i-1]+fibArray[i-2]);
    }
}
fibSequence(12);