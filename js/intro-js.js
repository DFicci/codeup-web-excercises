// Write javascript code, that is, variables and operators to describe the following scenarios.
// You rented 3 movies and the price is $3 per day.
var mermaid = 3, bear = 5, hercules = 1;
//addition
var sum = (mermaid + bear + hercules);
//total
var n = sum * 3
console.log("In order to watch all 3 movies with your kids, \nYou would have to pay a total of " + "$" + n + " for the movies.");

//Working as a contractor for Google, Amazon, and Facebook
//hours worked
var google = 6, amazon = 4, fb = 10;
//hourly wage, h = hourly rate
var gh = 400, amazonh = 380, fbh = 350;
//addition
var total = (google+gh) + (amazon+amazonh) + (fb+fbh);
//total amount made
console.log("\nThe total amount of money you would make as a contractor for all three companies is " + "$" + total);

// if a student tries to enroll in class
var student = 1, enrolled = 23, course = student + enrolled;
var message;
if (course > 25) {
    message = "\nSorry, please choose a different class. All seats are filled."
} else if (course < 25 ) {
    message = "\nCongratulations on your enrollment into the class!"
}
console.log(message)

//Product discount
//How many products?
var product = 5;
//How much of a discount
var discount = .20;
//how many items needed for discount
var items = 6;
//the price of each product
var price = 5;
//used to get the total amount after discount
var equal;
//used to get the discount
var pay;
if (product < items){
    pay = (price * discount);
    equal = price - pay;
    console.log("\nSince you bought 5 items you received a 20 percent" +
        " discount, your new total is $" + equal + ".")
} else {
    equal = price
}

// Creating username and password under conditions
let username = "codeup";
let password = 'notastrongpassword';
{
    username = username.trim();
    password = password.trim();
}
//the username cannot be in the password/no white spaces
if ((password.includes(username)) && (password.length > 5) && (username.length <= 20)){
    console.log("Sorry, Username and Password cannot be created")
} else {
    console.log("\nYour account is all setup!")
}
