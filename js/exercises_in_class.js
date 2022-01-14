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
// userInput()
// function userInput(){
//  let input = prompt("Please enter the password")
//  getPassword(input)
// }
// function getPassword (password){
//  let thisIsThePassword = "codeup"
//  while (password !== thisIsThePassword){
//   return alert("Access Denied")
//  }
//  if (password === thisIsThePassword){
//   return alert("Access Granted")
//  }
// }

//need to fix-------------------------------------
// getMeaningOfLife(1)
// function getMeaningOfLife (meaningfulNum){
//  let counter = 0;
//
//  if (!isNaN(meaningfulNum)){
//   while(meaningfulNum !== counter){
//    counter++;
//    console.log(counter);
//    ;
//  }
//   if (counter === 10){
//    return console.log("The meaning of life, the universe, and everything is "+ meaningfulNum + " your meaningful number");
//   }
//  }
// }---------------------------
//cones started with
// var allCones = Math.floor(Math.random() * 50) + 50;
// var counter = 0;
// //
// do {
//  counter++;
//  console.log("i sold " + counter + " cones.");
//  console.log("there are " + allCones + " cones available");
//  console.log("cones that I tried to sell last time ", counter);
//  var randomNum = Math.floor(Math.random() * 5) + 1;
//
//  if (randomNum > allCones) {
//   console.log("I cannot sell you " + counter + ", I only have " + allCones + " left.")
//  } else {
//   allCones -= randomNum;
//   console.log("I sold " + counter + " cones.");
//  }
// }
//
// while (allCones > 0);
// console.log("Yay, i am all sold out of my cones")

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
// onlyOdd(10)
// function onlyOdd (numOfIteration) {
//  for (let x = 0; x <= numOfIteration; x++) {
//   if (x % 2 !== 0) {
//    console.log(x + " is odd");
//   }
//  }
// }
// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds
// evenOrOdd(20)
// function evenOrOdd(userNumIterations){
//  for (let x=0; x<= userNumIterations; x++) {
//   if (x % 2 === 0) {
//    console.log(x + " is even");
//   } else {
//    console.log(x + " is odd");
//   }
//  }
// }
// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

// function getPassword(userInputPassword){
//  let password = "1234qwer";
//  for ( let x = 0; x <= 3; x++ ){
//   if (userInputPassword === password){
//    alert("Congratulations, you're all signed in");
//   } else if (userInputPassword !== password){
//    alert("Please try again, you have " + counter + " attempts left out of " + attempts);
//   }
//  }
// }

// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

// let favoriteArtist = ['avicii', 'marshmello', 'atr', 'adtr', 'riseAgainst']
// function artist(favorite){
//  console.log(favorite[0])
//  console.log(favorite[2])
//  console.log(favorite[4])
// }
// artist(favoriteArtist)



// var carOne = {};
// carOne.make = 'Ford';
// carOne.model = 'Taurus';
// carOne.year = 2000;
// console.log(carOne);
//
// var carTwo = {
//     make : 'toyota',
//     model : 'tundra',
// };
// console.log(carTwo);
//
// console.log('Make: ' + carOne.make)
// console.log('Model: ' + carOne.model)
// console.log('Year: ' + carOne.year)

// Declare an array of two objects for movies
// that have the following member values:
// title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
// call it with each of your array elements.
// write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements (edited)
// let movies = [];
// let movie1 = {
//     title: 'The Town',
//     yearReleased: 2010,
//     rating: '7.5/10',
//     director: {
//         firstName: 'Ben',
//         lastName: 'Affleck',
//     },
//     imbdRating: 7.5,
//     academyAwardWin: false,
// };
// movies.push(movie1)
// let movie2 ={
//     title: 'Heat',
//     yearReleased: 1994,
//     rating: '7.5/10',
//     director: {
//         firstName: 'Michael',
//         lastName: 'Mann',
//     },
//     imbdRating: 7.5,
//     academyAwardWin: false,
// };
// movies.push(movie2)
//
// // printMovie(movie1)
// function printMovie (input){
//  console.log(input);
// }
// printMovies(movies)
// function printMovies(movieArray){
//     movieArray.forEach(function (movie) {
//         printMovie(movie)
//     });
// }

// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
// It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function
// please cupdate as you complete this ungraded practice exercise (edited)



// *** last part of MINI EXERCISE ***
// Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
// Modify rate(rating) to set a myRating property on that object
// modify printMovie to display myRating for each movie
// 15 minutes

// movie1.rate = function (rating){
//     console.log(" i give this movie a " + rating)
// }
// movie1.rate(3)
//
// movie2.rate = function (rating){
//     console.log(" i give this movie a " + rating)
// }
// movie2.rate(3)

// Create a function called arrayToString.
//     The function takes a parameter called myArray.
//     It returns a string that is the concatenation of all the elements in myArray.
//     This function is essentially your own version of join.
//     Therefore, you cannot use join in your function body :slightly_smiling_face:

// let num = [1,2,3,4,5,6];
// let str = '';
// let numLength = num.length;
// function arrayToString (numArray){
//     for (let i = 0; i < numLength; i++) {
//     if (i < numLength - 1){
//         str += num[i]
//         return str +=','
//     }
//         }
//     }
//
//
// console.log(arrayToString(num))


// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

function removeALL(array,value){
   return array.filter(function (filter){
       return filter !== value;
   });
}
console.log(removeALL(bugs, "mosquito" ));
console.log(removeALL(bugs, "ant"));
console.log(removeALL(bugs,"roach"));








