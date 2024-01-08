// let a = 10
// var b = 20
// const c = 30

if(true){
    let a = 100
    var b = 200
    const c = 300
}
// console.log(a);
// console.log(b);//200
// console.log(c);
// var may change the value if it gets changes in scope also //so always avoid to use var

///////////////////////////////////////////////////////////
//Global and scope level 

// Scope can use global function but global cant use scope varaibles
function one(){
    const username = "rohan";
    function two(){
        const website = "cisco.com"
        console.log(`My name is ${username} and i work in ${website}`);
    }
    // console.log(website);
    two()
}
// one()

// addone(6)   //even by this we can run our program 
function addone(num){
    num+1
}
// addone(6)
///////////////////////

addTwo(6)   //this is not okay as we are storing function in variable so we cannot call before creating it.  (hoisting)
const addTwo = function(num){
    num+1
}
// addTwo(6)