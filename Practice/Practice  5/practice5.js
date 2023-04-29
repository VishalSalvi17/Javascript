//Enter any number
const number = parseInt(prompt("Enter a number"));
let isPrime = true;

if(number == 1){
    document.write("One is neither prime nor composite");
}
else if(number > 1) {
    for(let i=2; i<number;i++){
        if(number%i==0){
            isPrime=false;
            break;
        }

    }
    if(isPrime){
        document.write(`${number} is a prime number`);
    }else{
        document.write(`${number} is not a prime number`);
    }
}
//check if number is less than 1
else{
    document.write("The number is not a prime number");
}