// Function to determine whether number is prime or not
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
let counter = 0;
let num = 1;
//If number is prime will add one to counter, once counter reaches 50 it will stop.
while (counter <=50){
    if (isPrime(num)){
        console.log(num);
        counter++;
        num++;
    } else {
        num++;
    }
}