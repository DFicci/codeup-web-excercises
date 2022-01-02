function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

let counter = 0;
let num = 1;
while (counter <=50){
    if (isPrime(num)){
        console.log(num);
        counter++;
        num++;
    } else {
        num++;
    }
}