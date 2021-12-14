/*
*Write a program that receives user input and analyzes the input differently if the input is number or a string.
*If the input is a string, it will analyze the string differently if it is length 1.
*The rules of analysis:
*                      -If the input is a number:
*                     * output if the number is odd or even (zero is considered even).
*                     * output if the number is negative, positive, zero.
*                      -If the input is string:
*                     * if the string's length is 1, output if the string(or char) is a vowel or not.
*                     * Otherwise, output the length of the string.
*/

let testWork = confirm("Would you like to test my work?")


function testFunction (continueWithWork){
    let userInput = prompt("Write a number, letter, or word.")
    if (testWork = true) {
        default userInput
        return analyzeInput(continueWithWork)
    }
}


// Function analyzeInput takes the input and determines where to send it depending on if it is a number or string.
function analyzeInput (inputToAnalyze){
    if (typeof inputToAnalyze === 'string' ){
        return stringLength(inputToAnalyze)
    } else if (typeof inputToAnalyze === 'number'){
        return oddOrEven(inputToAnalyze);
    }
}
//if input is a number it will evaluate if it's odd or even
function oddOrEven(oddOrEven){
    if (oddOrEven%2 === 0){
        alert("this number is odd");
        return isItGreaterThanOrLessThan(oddOrEven);
    } else{
        alert("this number is even");
        return isItGreaterThanOrLessThan(oddOrEven);
    }
}
//once determined if odd or even it will determine if it is less than, greater than or equal to zero
function isItGreaterThanOrLessThan (greaterThanOrEqual){
    if (greaterThanOrEqual < 0){
        return alert('this number is less than zero');
    } else if (greaterThanOrEqual > 0){
       return alert('this number is greater than zero');
    } else if ( greaterThanOrEqual = 0){
        return alert('this number is equal to zero');
    }
}
//if input is a string this will determine how long the string is, if only 1 character will be sent to determine
//if vowel or not
function stringLength (howLongIsString){
    if(howLongIsString.length > 1){
        alert("Your string is " + howLongIsString.length + " characters long")
    } else{
        return analyzeVowel(howLongIsString)
    }
}
//this will determine if the 1 value string is a vowel.
function analyzeVowel(vowel){
     switch (vowel){
         case "a":
             alert("The letter you entered, " + vowel + ", is a vowel.")
             break;
         case "e":
             alert("The letter you entered, " + vowel + ", is a vowel.")
             break;
         case "i":
             alert("The letter you entered, " + vowel + ", is a vowel.")
             break;
         case "o":
             alert("The letter you entered, " + vowel + ", is a vowel.")
             break;
         case "u":
             alert("The letter you entered, " + vowel + ", is a vowel.")
             break;
     }
}