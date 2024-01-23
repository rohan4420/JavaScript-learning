function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get :function(){
            return this._email
        },
        set :function(value){
            this._email = value.toUpperCase()
        }
    })
    Object.defineProperty(this, 'password',{
        get :function(){
            return this._password
        },
        set :function(value){
            this._password = value.toUpperCase()
        }
    })
}
const chai = new User("rohan@gmail.com","123")
console.log(chai.email);
console.log(chai.password);