/**
 * Created by Vincent on 5/19/2017.
 */
/*
 Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

 Write a function that takes one parameter
 Parameter 1 - A string
 The function should output your input string translated into Pig Latin
 Example:
 var myString = "Hello my name is Stu"
 `translate(myString);
 Output - "ellohay ymay ameya siay tusay"
 */
function translate(str){
    let strArray = str.split(' ');
    let vowel = ['a','e','i','o','u'];
    let final = '';
    for(let i = 0; i<strArray.length; i++){
        if(vowel.indexOf(strArray[i][0]) === -1){
            final += strArray[i].substr(1) + strArray[i][0] + 'ay ';
        }
        else{
            final += strArray[i] + ' ';
        }
    }
    console.log(final);
}
var myString = "Hello my name is Stu";
translate(myString);