// Write javascript code, that is, variables and operators to describe the following scenarios.
// You rented 3 movies and the price is $3 per day.
let mermaid = 3, bear = 5, hercules = 1;
//addition
let sum = (mermaid + bear + hercules);
//total
let n = sum * 3
console.log("In order to watch all 3 movies with your kids, \nYou would have to pay a total of " + "$" + n + " for the movies.");
//----------------------------------------------------------------------------------------------------------------------
//Working as a contractor for Google, Amazon, and Facebook.
//hours worked.
let google = 6, amazon = 4, fb = 10;
//hourly wage, h = hourly rate
let gh = 400, amazonh = 380, fbh = 350;
//addition
let total = (google * gh) + (amazon * amazonh) + (fb * fbh);
//total amount made
console.log("\nThe total amount of money you would make as a contractor for all three companies is " + "$" + total);
//----------------------------------------------------------------------------------------------------------------------
// if a student tries to enroll in class
let student = 1, enrolled = 25, course = student + enrolled;
//Message to be relayed when enrolling in class
let message;
if (course >= 26) {
    message = "\nSorry, please choose a different class. All seats are filled."
} else if (course <= 25) {
    message = "\nCongratulations on your enrollment into the class!"
}
console.log(message)
//----------------------------------------------------------------------------------------------------------------------
//Product discount
//How many products?
let product = 1;
//How much of a discount
let discount = .20;
//how many items needed for discount
let items = 2;
//the price of each product
let price = 5;
//Place holders
let equal, pay

if (product >= items) {
    pay = (price * discount);
    equal = price - pay;
    console.log("\nSince you bought " + product + " items you received a 20 percent" +
        " discount, your new total is $" + equal + ".")
} else {
    equal = price
    console.log("\nWe have a discount today, would you like to buy another item to recieve that disount.")
}
//----------------------------------------------------------------------------------------------------------------------
//username and password
let username = 'codeup';
let password = 'notastrongpassword';

//Used to create no white space at the beginning or end
username = username.trim();
password = password.trim();

//Used to ensure the length does not exceed
let user = username.substring(username.length);

/*Conditions are required in order to create an account
 *Password must not contain the username
 *Username must not exceed a specified character length of 20
 *Password must not be below specified character length of 5
 */
if ((password.includes(user)) && (username.length > 20) && (password.length < 5)) {
    console.log("\nAccount could not be created, please follow instructions.")
} else
    console.log("\nYour account has been successfully created, Welcome " + username + "!");{
}
//----------------------------------------------------------------------------------------------------------------------
//excercise 2
let sample = "\nhello codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
console.log(sample + " students");
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
// use substring first, then index of
console.log(sample.substring(sample.indexOf("c"),sample.indexOf("p") + 1));
// --------------------------------------------------------------------------------------------------------------------
/*In class excercise
*Using the provided variables, create a piece of logic which will determine if a person
*is qualified to get an extended auto loan.
*requirements: credit score must be over 680 and have at least $4000 on hand or, have at least $10000 on-hand
*/

let creditScore = 590;
let cashOnHand = 12000;

if ((creditScore > 680) && (cashOnHand >= 4000) || (cashOnHand >= 10000)){
    console.log("Congratulations, you've been accepted into our extended auto loan program!")
} else
    console.log("Sorry to inform you that you do not meet our requirements for our auto loan program.")
//----------------------------------------------------------------------------------------------------------------------
