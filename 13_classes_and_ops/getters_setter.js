// if we are writing getters we must write setters
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // RangeError: Maximum call stack size exceeded => as setter and constructor are in race to initialize value so this error occurs
    //so we can over-ride password
    set password(value){     
        this._password = value.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }
    get email(){
        return `${this._email}123`
    }
}
const chai = new User("r@gmail.com","123")
console.log(chai.password);
console.log(chai.email);