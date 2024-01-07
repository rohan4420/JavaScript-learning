//
// const tinderuser = new Object()  //singleton object
const tinderuser = {} //non-singleton object

tinderuser.id = "123abc"
tinderuser.name = "Rohan"
tinderuser.isLoggedIn = false

// console.log(tinderuser); //{ id: '123abc', name: 'Rohan', isLoggedIn: false }

const regularUser = {
    email : "ram@gmail,com",
    fullname : {
        userFullName : {
            firstName : "rohan",
            lastname : "Sardeshmukh"
        }
    }
}
// console.log(regularUser);  
//   {
//     email: 'ram@gmail,com',
//     fullname: { userFullName: { firstName: 'rohan', lastname: 'Sardeshmukh' } }
//   }

// console.log(regularUser.fullname);  //{ userFullName: { firstName: 'rohan', lastname: 'Sardeshmukh' } }

// console.log(regularUser.fullname.userFullName); //{ firstName: 'rohan', lastname: 'Sardeshmukh' }

// console.log(regularUser.fullname.userFullName.firstName);  //rohan

// merging of objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const combine = {obj1 , obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// console.log(combine);

const obj3 = Object.assign({},obj1,obj2)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } //{} good to give this as both objects will combile and go in {}
// console.log(obj3);

//here obj1 and obj2 is source and {} is target
//object.assign(obj1, obj2) =>all element will combile and go in obj1 which is source so prefer to use {}
//object.assign({},obj1, obj2) =>all element will combile in {}

//merging using spread

const obj4 = {...obj1, ...obj2}  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } //prefered to use this
// console.log(obj4);

//when we get database values how to handle them

const users = [
    {
        id : 1,
        email : "rohan@gmail.com"
    },   {
        id : 2,
        email : "rohan@gmail.com"
    },
    {
        id : 3,
        email : "rohan@gmail.com"
    }

]
// console.log(users[1].id)

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));  //gives all keys in the form of array
// console.log(Object.values(tinderuser)); //gives value in the form of array
// console.log(Object.entries(tinderuser)); //[ [ 'id', '123abc' ], [ 'name', 'Rohan' ], [ 'isLoggedIn', false ] ]  //we get arry in array 

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));   //true


//des-structuring of object
const course = {
    coursename : "Js on youtube",
    fees : 999,
    courseInstructername : "hitesh"
}
// course.courseInstructername

const {courseInstructername} = course
// console.log(courseInstructername); //hitesh

//this is the way to destucture the object
const {courseInstructername:instructer} = course
// console.log(instructer);

/* 
when we force other persons to do our work (restaurant-we see menu and just order)
--------API---------
we can go on google and type random user me api copy any JSON format and paste in 
JSON formatter further we can select tree or form and know hoe much object it hasg
*/
