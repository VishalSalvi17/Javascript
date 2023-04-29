let a = prompt('Enter the first value:');
let b = prompt ('Enter the sencond value:');

let temp;

temp=a;
a=b;
b=temp;

document.write(`First no after swapping is ${a}`);
document.write(`First no after swapping is ${b}`);
