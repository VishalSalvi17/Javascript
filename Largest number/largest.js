//program to find the largest number among three numbers

//take input from the user 
const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));
const num3 = parseFloat(prompt("Enter the third number"));

let largest;
//check the condition
if(num1 >= num2  && num1 >= num3){
    largest=num1;
}
else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}
else{
    largest= num3;
}
 //display result
 document.write("The largest number is" +largest);