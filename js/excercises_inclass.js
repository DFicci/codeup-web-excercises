function analyzeColor1(color){
    if (color === "blue" || color === "Blue"){
        return "blue is the color of the sky";
    } else if (color === "red" || color === "Red"){
        return "red is the color of love";
    } else if (color === "green" || color === "Green"){
        return "green is the color i envy";
    } else
        return "i dont know that color";

}
console.log(analyzeColor1("Green"))