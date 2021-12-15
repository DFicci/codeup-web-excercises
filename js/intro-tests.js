// Mini-Exercise:
// Create a new JS file under the js directory named intro-tests.js
// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

//Checks to see if string or not
function checker (input){
  if(typeof input === 'string'){
    return console.log(input.length)
  } else{
    return console.log(false)
  }
}

checker(null)