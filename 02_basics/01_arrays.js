//arrays
//they are resizeable

//array copy opeartion create shallow copies
// 1)Shallow copy => share same referance point
// 2)Deep copy => do not share same reference

//creation
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["virat","rohit"]

const myArr2 =new Array(1,2,3,4)

// console.log(myArr[1]);

//Arrays methods

// myArr.push(6)
// myArr.push(7)

//removes last element
// myArr.pop()

//not used 
//adds element at first moves all elemnts in array by one place ahead
// myArr.unshift(10)

//removes first element from array
// myArr.shift()

//gives boolean
// console.log(myArr.includes(5));

//gives index od element if not present gives -1
// console.log(myArr.indexOf(9));

//join it converts array into strings
const newArr = myArr.join()

// console.log(typeof newArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(myArr);

//slice , splice

console.log("A",myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)

console.log("Slice",myn1); //Slice [ 1, 2 ]

const myn2 = myArr.splice(1,3)
console.log("B",myArr);  //B [ 0, 4, 5 ]
console.log("Splice",myn2); //Splice [ 1, 2, 3 ]

/* Differenec b/w slice and splice
    1) splice includes 2nd paramenter whereas slice excludes
    2) In splice original array gets manipulate and those elemnts will be automatically removes from array   */
