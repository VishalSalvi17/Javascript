//check the number is even or odd
const number = parseInt(prompt("Enter the number:"));

if(number % 2 == 0){
    document.write(`${number} is Positive`);
}else{
    document.write(`${number} is negative`);
}