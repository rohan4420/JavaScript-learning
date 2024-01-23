const User ={
    _email : 'h@gmail.com',
    _password:'123',


    get email(){
        return this._email
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);