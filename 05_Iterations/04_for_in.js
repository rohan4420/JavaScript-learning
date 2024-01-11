//for in

const myObject = {
    js  : 'Javascript',
    cpp : 'C++',
    rb  : "ruby by apple"
}

for (const key in myObject) {
//   console.log(key);
// output=:=   js
//             cpp
//             rb
//   console.log(key,':-',myObject[key]);
}

const programming = ["js", "c++", "java", "ts"]
for (const prog in programming) {
    // console.log(prog);  //it will return keys (0,1,2,3)
    // console.log(programming[prog]);  //now we get values
} 

//for in loop in map
const map = new Map()
map.set('In',"India")
map.set('Un',"United States of America")
map.set('Fr',"france")

for (const key in map) {
    // console.log(key);  //no output as map is not iterable
} 


//for in used in object and for of used in array