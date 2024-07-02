let randomnum=parseInt(Math.random()*100+1)
// console.log(randomnum)

let prevnums=[]
let attempts=1

const userinput=document.querySelector("#enter")
const sumbit=document.querySelector("#submit")
const prevguess=document.querySelector(".guess")
const counts=document.querySelector(".attempt")
const startover=document.querySelector(".paras")
const loworhigh=document.querySelector(".lh")

const p= document.createElement('p')

let playgame=true

if (playgame) {
    sumbit.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        
        validateguess(guess)
    })
}

function validateguess(guess){
    if (isNaN(guess)) {
        alert("the given input is not valid")
    }else if (guess<1){
        alert("the given number is not in range ")

    }else if (guess>100){
        alert("the given number is not in range")
    }else{
        prevnums.push(guess)
        if (attempts===10) {
            displayguess(guess)
            displaymessage(`Game is over. the key number is ${randomnum}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess===randomnum) {
        displaymessage("you guessed it right")
        endgame()
    }else if (guess<randomnum){
        displaymessage("you guessed TOO low")
        
    }else if (guess>randomnum){
        displaymessage("you guessed TOO high")  
        
    }
}
function displayguess(guess){
    userinput.value=''
    prevguess.innerHTML+=`${guess},`
    attempts+=1
    counts.innerHTML=`${11-attempts}`
}
function displaymessage(mssg){
  loworhigh.innerHTML=`<h2>${mssg}</h2>`
}

function endgame(){
    userinput.innerHTML=""

    userinput.setAttribute("disabled",'')
    p.classList.add('button')
    
    p.innerHTML=`<h2 id=newgame>Start New Game</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()
}
function newgame(){
    const newbutton=document.querySelector("#newgame")
    newbutton.addEventListener('click',function(e){
        randomnum=parseInt(Math.random()*100+1)
        prevnums=[]
        attempts=1
        prevguess.innerHTML=''
        counts.innerHTML=`${11-attempts}`
        userinput.removeAttribute("disabled",'')
        startover.removeChild(p)
        displaymessage("Let's Give an Another Try")

        playgame=true
    })

}


