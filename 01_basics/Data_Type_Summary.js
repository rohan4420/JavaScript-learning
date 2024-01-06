/* 
        JavaScript is considered a dynamic programming language. 
        This is because it allows for dynamic typing, where variable 
        types are determined at runtime, and it supports various dynamic 
        features such as runtime code evaluation (eval), the ability to 
        modify  object structures on the fly, and the dynamic creation of 
        functions.Dynamic typing means that you don't have to declare 
        the data type of a variable explicitly; the type is determined at runtime.
*/
// Primitive(call by value):

// 7 types : String, Number, Boolean, null, undefined, Symbol(used to make value unique mostly used in React), BigInt

/* Numbers */
const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const isTemperature = null

let userEmai;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

const BigNumber = 726390085n;
// console.log(typeof BigNumber);


// Refreence(Non primitive):

// Array, Objects, Functions

const heros = ["Rohan", "Rahul", "Raghav"]; //Array
let myObj = {
    name : "Rohan",
    age : 23,
}

//object function
const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof myObj);