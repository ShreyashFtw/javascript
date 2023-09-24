// const score =400
// console.log(score);
const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const num2= 123.8955
console.log(num2.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++MATHS++++++++++++++++++++//

console.log(Math.abs(4));
console.log(Math.round(4.6));


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min)