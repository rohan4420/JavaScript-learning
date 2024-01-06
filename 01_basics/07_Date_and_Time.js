//Date 

let myDAte = new Date(); // date is object
// console.log(myDAte); //2024-01-06T15:24:57.533Z
// console.log(myDAte.toString());  Sat Jan 06 2024 15:30:17 GMT+0000 (Coordinated Universal Time)
// console.log(myDAte.toLocaleDateString())  1/6/2024
// console.log(myDAte.toDateString()) //Sat Jan 06 2024

// console.log(typeof myDAte);

// const myCeratedDate = new Date(2023 , 0, 23) //month will satrt with 0 //1/23/2023
// const myCeratedDate = new Date(2023 , 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM

const myCeratedDate = new Date("2023-01-14")
// const myCeratedDate = new Date("01-14-2023")  //1/14/2023, 12:00:00 AM
// console.log(myCeratedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)  //1704555549114
// console.log(myCeratedDate.getTime())  //1673654400000

// console.log(Math.floor(Date.now()/1000))  //1704555802

const newDate = new Date();

// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
     weekday:"long"
    
    })
console.log(newDate);