//prompt the user for an odd number between 1 and 50. use a loop and a break statement to continue promoting
//the user if they enter invalid input.

function breakAndContinue(){
    var input = 0;
    do {
        input = prompt(" Enter a number between 1 and 50 ")
        input = parseInt(input);
        if( input > 1 || input <= 50){
            break;
        }
    } while(true);
    for ( let i = 1; i <=50; i++){
        if(i % 2 === 1){
            console.log("this is an odd number: " + i)
            continue;
        }
        if (i === input){

        }
    }
}