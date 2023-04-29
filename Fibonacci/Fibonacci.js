//Enter number of terms
const number = parseInt(prompt("Enter number of terms"));
let n1=0,n2=1,nextTerm;

document.write("Fibonacci Series:")
for(let i=0;i<=number;i++){
    document.write(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}