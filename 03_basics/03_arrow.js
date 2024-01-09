const user = {
    userName : "rohan",
    price : 999,
    welcomeMessgae: function(){
        console.log(`${this.userName},welcome to website`);
        // console.log(this);
        //output
        // {
        //     userName: 'rohan',
        //     price: 999,
        //     welcomeMessgae: [Function: welcomeMessgae]
        //   }

    }
}
//this => refer to current context(values)

// user.welcomeMessgae()   //rohan,welcome to website

// user.userName = "ram"
// user.welcomeMessgae()  //ram,welcome to website

// console.log(this);  //{} but same when we print on website it gives o/p as window(global object)

// function two() {
//     let username = "rohan"
//     console.log(this) //everything regarding global
//     console.log(this.username);  //undefined  (this is onlybused in objects)
// }
// two();


//arrow function ////

const two = ()=>{
    console.log("hello bhailog");
    // console.log(this)   //{}
}
// console.log(two());

//difference b/w normal function and arrow function 
// is when we print 'this' by console.log normal function gives full global object and arrow function gives {}

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }


//implicitly
// const addTwo = (num1, num2) => num1 + num2   //if we have only one return statement then we can write it on same line 
// const addTwo = (num1, num2) => (num1 + num2 )   //we can use parenthesis but we can not use curly braces(if used then give return statment)
// const addTwo = (num1, num2) => ({userName:'rohan'})

console.log(addTwo(3,5));

//explicitly
