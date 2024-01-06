/* Numbers */

const score = 100
// console.log(score) //100

const balance = new Number(100);
// console.log(balance) //[Number: 100]

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)) ; //100.00

const other = 23.56
// console.log(other.toPrecision(2)); //24
// console.log(other.toPrecision(3)); //23.6
// console.log(other.toPrecision(1)); //2e+1 // it gives 1 digit and rest convert to exponential

const hundreds = 100000000;

// console.log(hundreds.toLocaleString()); //100,000,000 according to us
// console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000 according to india

/* Maths */

// console.log(Math.abs(-5)) //5
// console.log(Math.ceil(4.7)) //5
// console.log(Math.floor(4.7)) //4
// console.log(Math.round(4.6)); //5

// console.log(Math.min(2,5,6,1));
// console.log(Math.max(2,5,6,1));

/* Random */

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1); //if value is 0.1 then floor will give value as 0 so add 1

const min = 10;
const max = 20;

const rand = Math.floor(Math.random() * (max - min + 1)) +min; // max-min +1 gives same o/p as above and as we want in between 10 to 20 so add min

console.log(rand);









