// create a function that shows the multiplication table for that number from 1-10
showMultiplicationTable(9)
function showMultiplicationTable(x){
    for (let i = 0; i <= 10 ; i++) { // makes sure to only go to 10
        let result = x * i // times the input by each number up to 10
        console.log(x + " * " + i + " = " + result)// logs the results
    }
}
// create a for loop that will take numbers between 20 and 200 and ouput to the console whether each number is odd or
// even....
for (let i = 0; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (randomNumber%2 === 0){
        console.log("your number " + randomNumber+ " is even")
    } else {
        console.log("your number " + randomNumber+ " is odd")
    }
}
/* create loop that uses console.log to create the output shown below.
*1
*22
*333
*4444
*55555
*666666
*7777777
*88888888
*999999999
*/
for (let i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i)) // convert to a string and repeat
}
// create a for loop that uses console.log to countdown from 100 to 5, showing every 5 numbers.
for (let i = 100; i >= 5 ; i-=5){
    console.log(i)
}