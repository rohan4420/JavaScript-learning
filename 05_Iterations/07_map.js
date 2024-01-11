let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map never reduces array it always gives output equal to elements rather it be calcualtion or boolean values
// myNum = myNum.map( (num) => {
    // return num > 8   //gives boolean value
// })
// console.log(myNum);

//chaining of loops
let newNums = myNum
                .map( (nums)=> nums*2 )
                .filter((nums) => nums>10)  //1st chaining map has returned the values to this line filter


console.log(newNums);