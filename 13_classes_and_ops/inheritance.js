class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username is ${this.userName}`);
    }
}
class Teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`New course was added by ${this.userName}`);
    }
}
const tea = new Teacher("chai","chai@gmail.com","123")
console.log(tea.addCourses());

const chai = new User("masala chai")
console.log(chai.logMe());
// console.log(chai.addCourses());

// console.log( chai  instanceof Teacher);  true

console.log(tea instanceof Teacher);