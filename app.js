let gameSeq = [];
let userSeq = [];

let colors = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;


let highScore = document.getElementById('high-score');


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started..!");
        started = true;

        levelUp();
    }
});

let h2 = document.querySelector('h2');


function btnFlash(btn) {
    btn.classList.add("game-flash");
    setTimeout(function () {
        btn.classList.remove("game-flash");
    }, 250);
};


function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function () {
        btn.classList.remove("user-flash");
    }, 250);
};


function levelUp() {
    level++;

    h2.innerText = `Level ${level}`;

    let ranIndx = Math.floor(Math.random() * 4);
    let randColor = colors[ranIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(ranIndx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    // console.log(gameSeq);

    btnFlash(randBtn);

};


function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    // console.log(userColor);

    userSeq.push(userColor);
    // console.log(userSeq);

    checkBtn(userSeq.length - 1);

};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkBtn(indx) {

    if (userSeq[indx] === gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            userSeq = [];
        }
    } else {
        h2.innerHTML = `Game Over.! Your Score was:<B>${level}</B> <br> Enter any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        },100);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "red";
	    },150);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
	    },200);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "red";
	    },250);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
	    },300);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "red";
	    },350);
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
	    },400);


        reset();
    };
};



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

//HomeWork::=====================================================================

