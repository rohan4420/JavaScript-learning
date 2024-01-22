class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`username: ${this.userName}`);
    }

    static createId(){   //now we can not use this function outside
        return `123`
    }
}

const rohan = new User("rohan")
// console.log(rohan.createId());
// console.log(User.createId());

class Teacher extends User{
    constructor(userName, email){
        super(userName)
        this.email =  email
    }
}
const iphone = new Teacher("iphone","iphone@gmail.com")
iphone.logMe()