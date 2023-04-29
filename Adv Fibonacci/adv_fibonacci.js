//program to generate fibonacci series up to a certain number

//take input from the user
const number =parseInt(prompt("Enter a positive number"));
let n1=0,n2=1,nextTerm;

document.write("Fibonacci series:");
document.write(n1);
document.write(n2);

nextTerm=n1+n2;

while(nextTerm<=number){
    //print the next number
    document.write(nextTerm);

    n1=n2;
    n2=nextTerm;
    nextTerm=n1+n2;
}