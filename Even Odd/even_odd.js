//program to check if the number is even or oddd
//take input from the user
const number = prompt("Enter a number");

//ternaryoperator
const result=(number % 2 == 0)? "even" : "odd";

//display the result
document.write(`The number is ${result}.`);