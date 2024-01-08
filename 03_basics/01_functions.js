//functions => it is pakage with some lines

function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}
// sayMyName  //it gives referenece it will not execute
// sayMyName(); //by using parenthesis it will execute it

//add two numbers
function addTwoNumbers(a, b){  //parameters
    console.log(a+b);
}

//()arguement
//addTwoNumbers(3, 4)  //7
// addTwoNumbers(4,'4') //44
// addTwoNumbers(4, 'a') //4a
// addTwoNumbers(3, null)  //3

//by using return statement
// function addTwoNumbers(a, b){  //parameters
//     let sum = a+b;
//     return sum;
//     console.log("hello");  //this line never print 
// }

// result = addTwoNumbers(4,4)
// console.log(result);

// function isLoggedIn(userName){
//     // if(userName === undefined){
//     if(!userName){
//         console.log("Please enter username")
//         return
//     }
//     return `${userName} just loggedIn`
// }

function isLoggedIn(userName='rahul'){
    return `${userName} just loggedIn`
}
// console.log(isLoggedIn());  //rahul just loggedIn

// console.log(isLoggedIn("rohan")); //rohan just loggedIn

//////////////////////////////////////////////////////////

// ... =>rest or spread operator used to collect all elements and gives output in the form of Array

// function calculateCartPrice(val1, ...num){   //[200, 300]  value will get 1st element and rest all will go in ...num(spread opeartor)
function calculateCartPrice(...num){
    return num;
}
// console.log(calculateCartPrice(100,200,300));  //100    //if function is with only 1 parameter (num)

// console.log(calculateCartPrice(100,200,300)); 

//passing object in function
const user = {
    name : "rohan",
    price : 23,
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
 
// handleObject(user) //Username is rohan and price is 23

// handleObject({     //Username is rahul and price is 28
//     name : "rahul",
//     price : 28,
// })

//passing array in function
const myArray = [10, 20, 30, 40]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));  //20

console.log(returnSecondValue([10,30,50,70])); //30

