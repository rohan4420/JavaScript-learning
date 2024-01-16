const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toDateString());
// clock.innerHTML = `${date.toLocaleTimeString()}` //when we refresh then time will get updated

setInterval(function(){
    let date = new Date()
    clock.innerHTML = `${date.toLocaleTimeString()}`
},1000)
