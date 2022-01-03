// function analyzeColor1(color){
//     if (color === "blue" || color === "Blue"){
//         return "blue is the color of the sky";
//     } else if (color === "red" || color === "Red"){
//         return "red is the color of love";
//     } else if (color === "green" || color === "Green"){
//         return "green is the color i envy";
//     } else
//         return "i dont know that color";
//
// }
// console.log(analyzeColor1("Green"))
//
// gimmeNumber()
// function gimmeNumber(hopefullyANumber){
//     if(confirm("would you like to enter a number???") === true){
//         whatNumber()
//     }
// }
// function whatNumber(){
//     let userInput = prompt("what is your number")
//
// }
// if(parsedInput === 0){
//     alert("you're awesome")
// } else {
//     alert("access denied")
// }
// }
//----------------------------------------------------------------------------------------------------------------------

// // TODO: MINI EXERCISE
// // TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point
// while (counter <= 25){
// if(counter%2 === 0){
//  console.log(counter);
// }
//  counter++
// }
//
// function add (num1, num2){
//  return console.log(num1 + num2);
// }
// add(1,2);
//
// function square(numToSqr){
//  return console.log(numToSqr * numToSqr);
// }
// square(5);
//
// function sumOfSquare (a, b){
//  return console.log((a * a)+(b * b));
// }
// sumOfSquare(1,5)
// FIZZ-BUZZZZZZZ
// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?

// function getFizzBuzz(startingNum) {
//  if(isNaN(startingNum)) {
//  return console.log("enter a value");
//  }else if(startingNum%3 === 0 && startingNum%5 === 0) {
//   return console.log("fizzbuzz");
//  } else if (startingNum%3 === 0) {
//   return console.log("fizz");
//  }else if (startingNum%5 === 0) {
//   return console.log("buzz");
//  }
// }
// getFizzBuzz(9)

// getPaswordInput
// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file
userInput()
function userInput(){
 let input = prompt("Please enter the password")
 getPassword(input)
}
function getPassword (password){
 let thisIsThePassword = "codeup"
 while (password !== thisIsThePassword){
  return alert("Access Denied")
 }
 if (password === thisIsThePassword){
  return alert("Access Granted")
 }
}