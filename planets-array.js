(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    planets.unshift("The Sun") // adds to the beginning of the string array
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    planets.push('Pluto') // adds to the end of the string array
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    planets.shift() // shift removes the first string in the array
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    planets.pop() // pop removes the last string from the array
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    console.log(planets.indexOf('Earth')) // finds and logs the index of the string requested
    console.log('Finding and logging the index of "Earth" in the planets array.');

    planets.reverse() // reverses the order of the array
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.sort() // sorts planets array by alphabetical order
    console.log("Sorting the planets array.");
    console.log(planets);
})();