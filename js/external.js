//alert message welcoming to the website
alert("Welcome to my Website!");
//lets the user type their favorite color
let userinput = prompt("What is your favorite color?");
alert("Great, " + userinput + " is my favorite color too!");
// if a student wants to enroll in class, Must choose between specified times.
let selectedTime = prompt("To enroll in the class, what time are you available? Please type a time any " +
       "time between 10am, 11am, 12pm.");
    if (selectedTime >= 12 || selectedTime < 10){
        alert("sorry please choose an earlier time")
    } else{
        alert("Congrats!")
    }
