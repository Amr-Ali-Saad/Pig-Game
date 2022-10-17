"use strict";
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let scores = [0, 0],
    currentScore = 0,
    activePlayer = 0,
    playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

function switchPlayer() {
    if (player0El.classList.contains("player--active")) {
        player0El.classList.remove("player--active");
        player1El.classList.add("player--active");
        currentScore = 0;
    } else if (player1El.classList.contains("player--active")) {
        player0El.classList.add("player--active");
        player1El.classList.remove("player--active");
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
}

btnRoll.addEventListener("click", () => {
    if(playing == true){
        let dice = Math.trunc(Math.random() * 6 + 1);

        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            // if(player0El.classList.contains("player--active")){
            //     current0El.textContent = currentScore
            // }else if(player1El.classList.contains("player--active")){
            //     current1El.textContent = currentScore
            // }
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }

        console.log(dice);
    }
});

btnHold.addEventListener("click", () => {
    if(playing == true){
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        
        
        if(scores[activePlayer] >= 20){

            playing = false;
            diceEl.classList.add("hidden");
            
            console.log("win")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        }else{
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click",()=>{
    score0El.textContent = 0
    current0El.textContent = 0
    score1El.textContent = 0
    current1El.textContent = 0
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.remove("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
    document.querySelector(`.player--0`).classList.add("player--active")
})
