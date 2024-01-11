//reduce
//
const myNums = [1, 2, 3]

// using normal functiom
// const newNums = myNums.reduce( function(acc,currValue) {
//     console.log(`acc:${acc} currValue:${currValue}`);
//     return acc+currValue
// },0)

// console.log(newNums);
//=>o/p
// acc:0 currValue:1
// acc:1 currValue:2
// acc:3 currValue:3


// =====================
// using arrow functiom
// const newNums1 = myNums.reduce( (acc,currValue) => acc+currValue,0)  //6

// console.log(newNums1);

// example
const shoppingCart = [
    {
        itemName : "Js course",
        price    :2999
    },
    {
        itemName : "Python course",
        price    :3999
    },
    {
        itemName : "Java course",
        price    :4999
    },
    {
        itemName : "Php course",
        price    :5999
    }
]
const totalPrice = shoppingCart.reduce( (acc, item) => acc+item.price,0)
console.log(totalPrice);