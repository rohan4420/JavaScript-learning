const coding = ["js", "java", "python", "spring"]

//higher order function  //mostly preferable
coding.forEach(function(item){  //write function just dont give the name
    // console.log(item);
});

// using arrow function
coding.forEach((item)=>{  //here function name and function keyword also we should not give
    // console.log(item);
});

//we can predefine callback function and then pass the refrance in for each()
function printMe(item){  //as we are declaring outside we should write function keyword and function name too
    // console.log(item);
}
// coding.forEach(printMe)  //just give referance dont give as method


// coding.forEach(
    // (item, index, arr)=>    {console.log(item,index,arr);}
// )
//output :-
// js 0 [ 'js', 'java', 'python', 'spring' ]
// java 1 [ 'js', 'java', 'python', 'spring' ]
// python 2 [ 'js', 'java', 'python', 'spring' ]
// spring 3 [ 'js', 'java', 'python', 'spring' ]


//array with objects
//mostly worked in database question
const myCoding = [
    {
        langName : "Javascipt",
        langFileName : "js"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]
// myCoding.forEach( (item) => {console.log(item.langName);} )  o/p =Javascript, Java, Python