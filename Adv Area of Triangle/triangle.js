const side1 = parseInt(prompt('Enter side 1:'));
const side2 = parseInt(prompt(`Enter side 2:`));
const side3 = parseInt(prompt(`Enter side 3:`));

//calculate the semi-parameter
const s=(side1 + side2 + side3)/2;

//calculate the area
const area = Math.sqrt( s*(s-side1)*(s-side2)*(s-side3));

document.write(`The area of the triangle is ${area}`);