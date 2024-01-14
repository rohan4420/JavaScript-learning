let randomNumber = Math.round(Math.random()*100+1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
// const form = document.querySelector('form')
const lowOrHigh = document.querySelector(".lowOrHi")
const resultParas = document.querySelector(".resultParas")

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter number from 1-100')
    }else if(guess > 100){
        alert('Please enter number from 1-100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayMessage(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number guessed is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number guessed is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ` `
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
    
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ``
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = Math.round(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML =``
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)

    })
}



// addEventListener('submit',function(e){
//     e.preventDefault()  //must write this line otherwise log will not print
 
//     let lastRes = parseInt( document.querySelector(".lastResult").innerHTML = "10")

//     // console.log(rand);

//     if(guess != rand && lastRes > 0){
//         lastRes = lastRes - 1
//         document.querySelector(".lowOrHi").innerHTML = "<h2>Wrong guess! Try again!!</h2>"
//         lastRes = parseInt( document.querySelector(".lastResult").innerHTML = `${lastRes}`)
//     }
//     else if(guess === rand ){
//         document.querySelector(".lowOrHi").innerHTML = "<h2>You guessed it right</h2>"
//     }
    
// })