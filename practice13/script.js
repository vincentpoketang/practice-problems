/**
 * Created by Vincent on 5/19/2017.
 */
/*
 math computation sequences

 Given the following function call:

 math_sequences(2,5);
 And the resulting output:

 ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];
 Create a function definition that achieves the output with the given input.

 Solution Set
 */
function math_sequences(num1,num2){
    var add = num1 + "+" + num2 + "=" + (num1 + num2);
    var subtract = num1 + "-" + num2 + "=" + (num1 - num2);
    var multiply = num1 + "*" + num2 + "=" + (num1 * num2);
    var divide = num1 + "/" + num2 + "=" + (num1/num2);
    return [add,subtract,multiply,divide];
}
console.log(math_sequences(2,5));