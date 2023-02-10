let numHome = 0
let numGuest = 0

let firstNumEl = document.getElementById("firstNum-el")
let secondNumEl = document.getElementById("secondNum-el")


function plusOne() {
    let result = numHome += 1
    firstNumEl.textContent = result
    //console.log(result)
}
function plusTwo() {
    let result = numHome += 2
    firstNumEl.textContent = result
    //console.log(result)
}
function plusThree() {
    let result = numHome += 3
    firstNumEl.textContent = result
    //console.log(result)
}

function secPlusOne() {
    let result = numGuest += 1
    secondNumEl.textContent = result
    //console.log(result)
}
function secPlusTwo() {
    let result = numGuest += 2
    secondNumEl.textContent = result
    //console.log(result)
}
function secPlusThree() {
    let result = numGuest += 3
    secondNumEl.textContent = result
    //console.log(result)
}
