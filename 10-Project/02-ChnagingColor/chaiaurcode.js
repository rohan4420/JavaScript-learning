const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6;  index++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let setColor ;
const startChangingColor = function(){
    if(!setColor){
        setColor = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){

    clearTimeout(setColor)
    setColor = null
}

document.getElementById("start").
            addEventListener('click',startChangingColor, false)

document.getElementById("stop").
            addEventListener('click',stopChangingColor, false)