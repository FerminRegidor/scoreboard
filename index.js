let homeScored = document.getElementById("home-score")
let guestScored = document.getElementById("guest-score")
let scoreHome = 0
let scoreGuest = 0

// Home
function homeBtn1() {
    scoreHome += 1
    homeScored.textContent = scoreHome
}
function homeBtn2() {
    scoreHome += 2
    homeScored.textContent = scoreHome
}
function homeBtn3() {
    scoreHome += 3
    homeScored.textContent = scoreHome
}

// Guest
function guestBtn1() {
    scoreGuest += 1
    guestScored.textContent = scoreGuest
}
function guestBtn2() {
    scoreGuest += 2
    guestScored.textContent = scoreGuest
}
function guestBtn3() {
    scoreGuest += 3
    guestScored.textContent = scoreGuest
}

// New game
function newGame() {
    scoreHome = 0
    scoreGuest = 0
    homeScored.textContent = scoreHome
    guestScored.textContent = scoreGuest
}