const min = parseInt(prompt('Enter a min value:'));
const max = parseInt(prompt('Enter a max value:'));

//generating a random number
const a = Math.floor(Math.random()*(max-min+1))+min;

//display a random number
document.write(`Random value between ${min} and ${max} is ${a}`);