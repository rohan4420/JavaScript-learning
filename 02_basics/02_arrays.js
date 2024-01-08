const india = ["virat", "Iyer", "Rohit"]
const aus = ["Warner", "Smith", "Head"]

//push acts on existing array
// india.push(aus);
// console.log(india);  //[ 'virat', 'Iyer', 'Rohit', [ 'Warner', 'Smith', 'Head' ] ]
// console.log(india[3][1]); //Smith

// concat gives new array as output
// const ipl = india.concat(aus)
// console.log(ipl);   //[ 'virat', 'Iyer', 'Rohit', 'Warner', 'Smith', 'Head' ]

//spread(...) (glass of water gets spread)
const team = [...india, ...aus]  
// console.log(team); //[ 'virat', 'Iyer', 'Rohit', 'Warner', 'Smith', 'Head' ]

//flat (concats all sub-array into single array and give array as output)

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]],12]

const realAnotherArray = anotherArray.flat(2)  //we can give infinity but its good to give exact depth number
// console.log(anotherArray)  //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 10, 11 ] ], 12 ]
// console.log(realAnotherArray)  // [1,  2, 3, 4,  5, 6,  7, 8, 9, 10,11, 12]

// console.log((Array.isArray("rohan")))  //false

// console.log(Array.from("rohan"));  //[ 'r', 'o', 'h', 'a', 'n' ]
 
// console.log(Array.from({name:"rohan"}))  //[] => it will not understand that what array we want either keys array or valye array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] => it converts set of elements to array
