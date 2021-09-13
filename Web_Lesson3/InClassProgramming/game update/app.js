const rockId=1
const paperId=2
const scissorId=3
let won=0
let lost=0
var computerChoice=0
function computerPick () {
    var computerChoice=Math.floor(Math.random()*3+1)
    if(computerChoice==1) {
        document.querySelector('.computer-choice').innerHTML='Computer Choice: Rock'
    }else if(computerChoice==2) {
        document.querySelector('.computer-choice').innerHTML='Computer Choice: Paper'
    }else {
        document.querySelector('.computer-choice').innerHTML='Computer Choice: Scissor'
    }
    return computerChoice;
}
function rock() {
    var pick=computerPick()
    if(pick==1){
        document.querySelector('.result').innerHTML='Draw'
    }else if(pick==2){
        document.querySelector('.result').innerHTML='You Lost. Try again!'
        lost++
        scoreCount()
    }else {
        document.querySelector('.result').innerHTML='congratulations you won!'
        won++
        scoreCount()
    }
}
function paper() {
    var pick=computerPick()
    if(pick==2){
        document.querySelector('.result').innerHTML='Draw'
    }else if(pick==3){
        document.querySelector('.result').innerHTML='You Lost. Try again!'
        lost++
        scoreCount()
    }else {
        document.querySelector('.result').innerHTML='congratulations you won!'
        won++
        scoreCount()
    }
}
function scissor() {
    var pick=computerPick()
    if(pick==3){
        document.querySelector('.result').innerHTML='Draw'
    }else if(pick==1){
        document.querySelector('.result').innerHTML='You Lost. Try again!'
        lost++
        scoreCount()
    }else {
        document.querySelector('.result').innerHTML='congratulations you won!'
        won++
        scoreCount()
    }
}
function scoreCount() {
    document.querySelector('.player-count').innerHTML='Player Score: '+won
    document.querySelector('.computer-count').innerHTML='Computer Score: '+lost
}
