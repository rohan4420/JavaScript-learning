//for of

// ["", "", ""]
// [{}, {}, {}]

//
const arr =[1, 2, 3, 6]
for (const a of arr) {
    // console.log(a);
}

//strings
const greetings = "Hello worlds!"
for (const greet of greetings) {
    // console.log(greet);
}

//maps  (same as array)  unique values

//first create obkect of map  
//key value pairs
//follows order
const map = new Map()
map.set('In',"India")
map.set('Un',"United States of America")
map.set('Fr',"france")

map.set('In',"India")  //it wil not insert as main goal of map in unique values

// console.log(map);

for (const [key,value] of map) {
    // console.log(key); //by this we get key and value so to avoide that use key in square bracket[key]
    // console.log(key,':=',value); 
    // o/p:
    // In := India
    // Un := United States of America
    // Fr := france
}

//object 
const myObject = {
    'game1' : 'NFS',
    'game2' : 'pubg'
}

//for of loop not works in object case

// for (const [key] of myObject) {
//     console.log(key);
// }
