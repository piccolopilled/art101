// Lab 6: Arrays and Objects
// Author: Kyla Florentino
// Date: 28 Apr 2025

// Constants
let myTransport = [" Toyota Highlander", " BART", " Santa Cruz Metro"];

//Create an object for my main ride
let myMainRide = {
  make: "Toyota",
  model: "Highlander",
  color: "Magnetic Gray Metallic",
  year: "2010",
  age: function() {
      return 2025 - this.year;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
