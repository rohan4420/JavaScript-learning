// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// first bluebird and q libraries were there further bluebird became popular and injected in js
// resolve => video is coming on monday reject => video is not coming

//promises created
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //Db calls, cryptography, network
//     setTimeout(function(){
//         console.log("Aysnc task is completed");
//         resolve()   //now there is connection b/w resolve and then
//     }, 2000)
// })

// // promiseOne.then() => direct relation with resolve 
// promiseOne.then(function(){
//     console.log("Promis consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 10000)
// }).then(function(){
//     console.log("Asysnc two resolved");
// })


// const promiseThree = new Promise(function(resollve, reject){
//     setTimeout(function(){
//         resollve({userName : "Chai", email : "rohansardeshmukh44@gmail.com"})
//     }, 10000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Rohan", email : "rohanbro@gmail.com"})
        }else{
            reject('Error.Error please check once')   //to send error we use reject
        }
    }, 5000)
})

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((user)=>{             //chaining of methods =>this (then) is used to get return from upward then
//     console.log(user);
// }).catch((Error)=>{          // to get the error and print we have to use catch method
//     console.log(Error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")         //this finally will alway run
// })


// const promiseFive =new  Promise((resolve, reject)=>{
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username : "JavaScrpt", email : "rohanjs@gmail.com"})
//         }else{
//             reject('Error.Js went wrong')   //to send error we use reject
//         }
//     }, 5000)
// })

// async will not handle errors directly  so to avoid crash write asysc in try catch
//we dont have catch here   //used in datbase connection
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive    //as promise is object we must store it in varaible
//         console.log("hello",response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// we can use both aysnc wait and ,then chaining methods //
// ============

//fetch is library
// =>using async
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUsers()

// fetch using .then

//itself it is promise so we can apply direct .then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E:",error);
})

//if we run this whole file then first this fetch will run and then rest async
