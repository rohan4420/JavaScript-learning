// object literal => it is literally object i will accpect only object
const user = {
    userName : "Rohan",
    age : 23,
    year : 2024,

    getAllUsers:function(){
        // console.log("I am here to rule");
        // console.log(`hello guys i am ata function`);
        // console.log(userName);  //error as it is not getting username (bcz this function has separate execution engine)
        // console.log(this.userName); Rohan

        //it has varibles and function global contest so it gives whole object contest
        console.log(this);  //it gives current contest means whole function(this will get only when we print inside object creation)
    }
}
// console.log(user["userName"]); //Rohan
// console.log(user.getAllUsers());
// console.log(this);  // {} as at a global constant it has not data to display
// -------

// Constuctor function(it will always give us an new contest)
// new is used to create new context we call it constructor function

// const data = new Promise()

function User(userName, count, active){
    this.userName = userName;
    this.count = count;
    this.active = active

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this
}

// const userOne = User("Rohan", 24, true)     // it will over-ride the value by doing this 
// const userTwo = User("Rahul", 29, false)
// console.log(userOne);

const userOne = new User("Rohan", 24, true)   
const userTwo = new User("Rahul", 29, false)
// console.log(userOne);     // here we can also remove return this as it is implicitly implementing it
// console.log(userTwo);     // now data will not change as we are creating everytime new contest

//new keyword
// 1) We get empty object which is called as instance
// 2) Constructer function is called and also all arguments get injected 
// 3) we get new keyword in function too.

// console.log(userOne.constructor);   [Function: User]

// name of varible instanceof name of class
console.log(userOne instanceof User);  //true
