//program to check an armstrong number of three digits

let sum = 0;
const number=prompt("Enter a three-digit positive integer");

//create a temporary variable 
let temp = number;
while(temp > 0){
    //finding the one's digit
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    //removing last digit from the number
    temp = parseInt(temp/10);//convert float into integer
}

//check the condition
if(sum==number){
    document.write(`${number} is an Armstrong number`);
}
else{
    document.write(`${number} is not an Armstrong number`);
}