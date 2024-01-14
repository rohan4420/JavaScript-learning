const form = document.querySelector("form")
// console.log(form);
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()  //dont submit on server
    const height = parseInt(document.querySelector('#height').value)  //textbox gives value in string
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log(height);
    // console.log(width);
    const results = document.querySelector('#results')

    if(height === 0 || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`
    }
    else if(weight === 0 || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`
    }
    else{
       const BMI = (weight / ((height*height)/10000)).toFixed(2)

        //show the result
        results.innerHTML = `<span>${BMI}</span>`
        const print = document.querySelector('#printguide')
        if(BMI < 18.6){
            print.innerHTML = `${BMI}-Under Weight`    
        }
        else if(BMI > 18.6 && BMI < 24.9){
            print.innerHTML = `${BMI}-Normal Range Weight`    
        }
        else{
            print.innerHTML = `${BMI}-Over Weight`    
        }
    }

})