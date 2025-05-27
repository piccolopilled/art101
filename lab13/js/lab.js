/* 
Lab 13: Loops
Author: Kyla Florentino
Date: 26 May 2025
*/

// for-loop to count to 1-200
let outputDiv = document.getElementById("output");
let result = "";

for (i = 1; i <= 200; i++) {
    let str = "";
    // check for multiple of 3, 5, and 7 first
    if (i % 105 == 0) {
      str = "FizzBuzzBoom!"
    } else if (i % 3 === 0 && i % 5 === 0) {
      str = "FizzBuzz!"
    } else if (i % 3 === 0 && i % 7 === 0) {
      str = "FizzBoom!"
    } else if (i % 5 === 0 && i % 7 === 0) {
      str = "BuzzBoom!"
    } else if (i % 3 === 0) {
      str = "Fizz!"
    } else if (i % 5 === 0) {
      str = "Buzz!"
    } else if (i % 7 === 0) {
      str = "Boom!"
    } else {
      str = i;
    }
    result += str + "<br>";
}

outputDiv.innerHTML =  result;
