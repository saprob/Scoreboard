
let scoreElone = document.getElementById("score-one")
let scoreEltwo = document.getElementById("score-two")

// let highOne = document.getElementById("high-one")
// let highTwo = document.getElementById("high-two")

let countOne = 0
let countTwo = 0

function countaone() {
    countOne += 1
    scoreElone.innerText = countOne
}

function countbone() {
    countOne += 2
    scoreElone.innerText = countOne
}

function countcone() {
    countOne += 3
    scoreElone.innerText = countOne
}


function countatwo() {
    countTwo += 1
    scoreEltwo.textContent = countTwo
}

function countbtwo() {
    countTwo += 2
    scoreEltwo.textContent = countTwo
}

function countctwo() {
    countTwo += 3
    scoreEltwo.textContent = countTwo
}

// function highone() {
//     scoreElone.innerText > scoreEltwo.textContent
//     highOne
// }

// function hightwo() {
//     scoreEltwo.textContent > scoreElone.innerText
//     highTwo
// }