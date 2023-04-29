//check largest number ampoung three numbers
const num1 = parseFloat(prompt("Enter first number"));
const num2 = parseFloat(prompt("Enter second number"));
const num3 = parseFloat(prompt("Enter third number"));

const largest = Math.max(num1,num2,num3);

document.write("The largest number is " + largest);