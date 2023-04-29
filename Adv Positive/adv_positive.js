//check if the number is positive, negative or zero.
const number = parseInt(prompt("Enter a number:"));

if(number>=0){
    if(number==0){
        document.write("The number is zero");
    }else{
        document.write("The number is positive");
    }
}
else{
    document.write("The number is negative");
}