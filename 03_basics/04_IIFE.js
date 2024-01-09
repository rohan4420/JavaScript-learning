// Immediately Invoked Function Expressions (IIFE)
// Why we use?
// 1) we get problem because of global scope pollution so to avoide that we use IIFE
// 2) the function which gets immediately executed

//normal function
// function chai(){
//     console.log(`finally executed`);
// }
// chai()

// IIFE


(function chai(){    //named IIFE
    console.log(`DC connected`);
})();   //after IIFE dont forget to give semicolon (it understand that we have to end here)

( ()=>{                             //simple IIEF  //arrow function
    console.log(`Dec connected two`);
})();

//with parameter
((name)=>{                             // simple IIEF with parameter  //arrow function
    console.log(`Dec connected two with help of ${name}`);
})("rohan")


//dont forgot to give ; after one IIFE