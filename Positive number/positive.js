//program to check given no is positive, negative or zero
const number = parseInt(prompt("Enter a number:"));

// check if no is greater that 0
if(number>0){
    document.write("Given number is positive");
}
else if(number==0){
    document.write("Given number is zero");
}
else{
    document.write("Given number is negative");
}