// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
// console.log(2 > "1");  //by-default js treat as a integer

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* the reason is that an equality check == and comparison > < >= <= work deifferently
    Comparison convert null to a number, treating it as 0.
    Thats why (13) null >= 0 is true and (11) null>0 is false
*/ 

// console.log(undefined==0);
// console.log(undefined>0)
// console.log(undefined<0)

// [===]=strict checker (checks datatype too)
console.log("2"===2);