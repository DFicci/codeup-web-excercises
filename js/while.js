// cones started with
var allCones = Math.floor(Math.random() * 50) + 50;
var counter = 0;
//
do {
    counter++;
    console.log("i sold " + counter + " cones.");
    console.log("there are " + allCones + " cones available");
    console.log("cones that I tried to sell last time ", counter);
    var randomNum = Math.floor(Math.random() * 5) + 1;

    if (randomNum > allCones) {
        console.log("I cannot sell you " + counter + ", I only have " + allCones + " left.")
    } else {
        allCones -= randomNum;
        console.log("I sold " + counter + " cones.");
    }
}

while (allCones > 0);
console.log("Yay, i am all sold out of my cones")