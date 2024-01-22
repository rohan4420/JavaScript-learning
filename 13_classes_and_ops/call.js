function setuserName(username){

    //complexdb calls
    this.username = username
    console.log("called");
}

function createuser(userename, email, password){

    // this.userename = userename
    // as when setusername function execution gets over its varaibles also get over as 
    // we want to use it in this function we have to hold referance of it  using .call
    userename = setuserName.call(this,userename)    //also to use that vairable we should give that function current this (comes with call)
    this.email = email
    this.passwprd = password
    
}
const user = new createuser("rohan","rohan@gmail.com",123)
console.log(user);