const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
// console.log(body);

//NodeList
buttons.forEach( function (item){
    // console.log(item);

    //event
    item.addEventListener('click',function(event){
        // console.log(event);
        // console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id
        }
    })
})