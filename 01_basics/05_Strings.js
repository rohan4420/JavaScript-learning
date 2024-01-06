const name = "Rohan";
const age = 23;

// console.log(name + age);
// console.log(`Hello my name is ${name} and I am ${age} of age.`); //good way to concat

const getName = new String("Rahul");
// console.log(typeof getName); // string is object = key value pair

// console.log(getName.__proto__); {}=>tis will print it will be empty.you can view it in console

// console.log(getName[0]);
// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(3));
// console.log(getName.indexOf('h'));

const fName = "Virat-ind";


//substring
const newString = fName.substring(0,5);   //we cant give -ve here as substr will consider that value as 0
// console.log(newString);

//slice
const anotherString = fName.slice(-8,4)
// console.log(anotherString);


//trim
const str = " rahu  ";
// console.log(str.trim());  //only works on whitesapces

//replace

const anotherStr = "rohan%20gmail.com";  //when we hit something that browser is not understanding it will replace it as '%20'

// console.log(anotherStr.replace('%20','@'));

//includes =>o/t boolean value

// console.log(anotherStr.includes('rohan'));
// console.log(anotherStr.includes('rahul'));

//convert string to array
//split = >(separater, limit)
const email = "rohan-cricekt-goo-player";
console.log(email.split('-'));
console.log(email.split('-',2));
