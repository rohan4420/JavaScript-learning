const coding = ["Js", "Python", "Java", "ReactJs"]
//for each always returns nothing i.e undefined
const values = coding.forEach(
    (item)=>{
        // console.log(item);
        return item
    }
)
// console.log(values); //it returns undefined
// ====================================

// filter functionit also takes callback 
//it also takes condition
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const newNums = myNum.filter(
    // (num) => num > 4   //as we have only one line it will return automatically
    // (num) => {num > 4}  //for this it will give [] as it is exceptng return stm
    (num) => {
        return num > 4
    }
)
// console.log(newNums);

//same using for-each loop
const yourNums = []
newNums.forEach( (item)=>{
    if(item => 5){
        yourNums.push(item)
    }
})
// console.log(yourNums);

//exercise
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   Q)return thos books whose genre is History/
let userBooks = books.filter( (bk) => 
    bk.genre == "History"
)
// let userBooks = books.filter( (bk) => {  //using return statement
//     return bk.genre == "History"
// })
// console.log(userBooks);

// Q)return those books who is published after 2000

let publishedBooks = books.filter(  (bk) => bk.publish > 2000 && bk.edition == 2014 )
// console.log(publishedBooks);

const mynums = [1, 2, 3, 4, 5]
const myone = mynums.filter( (item)=> item+10 )  //[ 1, 2, 3, 4, 5 ]   with map //[ 11, 12, 13, 14, 15 ]
console.log(myone);