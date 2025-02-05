let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let highScore = localStorage.getItem("highScore") || 0;
let highScoreDisplay = document.getElementById("high-score");
highScoreDisplay.innerText = `High Score: ${highScore}`;

document.addEventListener("keypress", function () {
    setTimeout(function () {
        if (started == false) {
            console.log("Game is Started..!");
            started = true;
            levelUp();
        }
    }, 500);
});

let h2 = document.querySelector("h2");

function btnFlash(btn) {
    btn.classList.add("game-flash");
    setTimeout(function () {
        btn.classList.remove("game-flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function () {
        btn.classList.remove("user-flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let ranIndx = Math.floor(Math.random() * 4);
    let randColor = colors[ranIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkBtn(indx) {
    if (userSeq[indx] === gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            userSeq = [];
        }
    } else {
        if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore);
            highScoreDisplay.innerText = `High Score: ${highScore}`;
        }

        h2.innerHTML = `Game Over.! Your Score was:<B>${level}</B> <br> Enter any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "white"), 100);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "red"), 150);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "white"), 200);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "red"), 250);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "white"), 300);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "red"), 350);
        setTimeout(() => (document.querySelector("body").style.backgroundColor = "white"), 400);

        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
