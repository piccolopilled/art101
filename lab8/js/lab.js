/*
Lab 8: Anon Functions and Callbacks
Author: Kyla Florentino
Date: May 28 2025
*/

// function that evaluates if x is greater than 6
function greaterThan(x) {
    return (x > 6);
};

// test function
console.log("Is 3 greater than 6? ", greaterThan(3));
console.log("Is 9 greater than 6? ", greaterThan(9));

var numArray = [5, 13, 7, 3, 20, 4];
console.log("My Array ^_^ ", numArray);

var mapResults = numArray.map(greaterThan);
console.log("Are the numbers in the array greater than 6? ", mapResults);

var mapMultiply = numArray.map(function(x) {
    return (x * 3);
});

console.log("Array multiplied by 3: ", mapMultiply);

$("#output1").html("<p> My Array ^_^ : " + JSON.stringify(numArray) + "</p>");

$("#output2").html("<p> Are the numbers in the array greater than 6? " + JSON.stringify(mapResults) + "</p>");

$("#output3").html("<p> Array multiplied by 3: " + JSON.stringify(mapMultiply) + "</p>");
