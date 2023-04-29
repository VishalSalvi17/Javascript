//program for a simple calculator
let result;

//take operator input
const operator = prompt("Enter the operator (either +,- or *,/):");

//take the operand input
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));

switch(operator){
    case'+':
    result=number1+number2;
    document.write(`${number1}${operator}${number2}=${result}`);
    break;

    case'-':
    result=number1-number2;
    document.write(`${number1}${operator}${number2}=${result}`);
    break;

    case'*':
    result=number1*number2;
    document.write(`${number1}${operator}${number2}=${result}`);
    break;

    case'/':
    result=number1/number2;
    document.write(`${number1}${operator}${number2}=${result}`);
    break;

    default:
    document.write("Invalid Operator");
    break;
}