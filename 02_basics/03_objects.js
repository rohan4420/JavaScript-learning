// 2 ways to cretae object 
// 1) literal  (This example creates an empty JavaScript object, and then adds 4 properties:)
// 2) constructor  //singleton

// object literals

// obkect.create //using contructer which is singleton
//by defualt it takes key as string

const mySym = Symbol("key1");

const user = {
    name : "rohan",
    "fullName" : "Rohan Sardeshmukh",
    [mySym]: "mykey1",
    // mySym: "mykey1",
    age : 18,
    location : "Pune",
    email : "rohan@gmal.com",
    isLoggedIn : false,
    isLastLoginDays : ["Monday","Saturday"]
}

//delete person.age;  //to delete properties

// console.log(user.name);
// console.log(user."fullName");
// console.log(user["email"]);
// console.log(user["fullName"]);  //perfer this to use

// console.log(user[mySym]);
// console.log(typeof mySym);

// user.name = "rahul"
// console.log(user);
// Object.freeze(user)
// user.name = "virat"
// user.email = "rohan123@gmail.com"
//it will not change as we have freezed the object
// console.log(user);

user.greeting = function(){
    console.log("Hello Js user");
}
console.log(user.greeting()); //function is not executed but refreance is given to us

user.greetingTwo = function(){
    console.log(`Hello ! Everyone, how are you ${this.name}`);  //string interpollition
}
console.log(user.greetingTwo());
