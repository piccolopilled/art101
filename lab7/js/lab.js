// Lab 7: Functions
// Author: Kyla Florentino
// Date: 29 Apr 2025

function sortUserName() {
  var userName = window.prompt("Hi! What is your name?");
  console.log("userName =", userName);

  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  
  // join array back into string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Nice to meet you! I sorted your name btw -w- : ",
  sortUserName(), "</br>");
    