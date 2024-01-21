// elements from HTML
let dino    = document.getElementById("dino");
let cactus  = document.getElementById("cactus");
let text    = document.getElementById("text");
let restart = document.getElementById("restart");
let hs      = document.getElementById("highScore");

// variables 
let state = true;
let score = 0;
let start = false;
let highScore = 0;

// event listeners
document.addEventListener("keydown", function (event) {
    jump();});


restart.onclick = function() {  
    cactus.style.display = "block";
    score = 0;
    state = true;
    start = false;
    text.innerHTML = "Score: 0";
}

// functions
function jump() { 
    if (!dino.classList.contains("animate") && !start) {
        cactus.style.animation = "cactusAnimation 2s infinite linear";
        start = true;
    }
    else if (!dino.classList.contains("animate") && state) {
        dino.classList.add("animate");
    }
    setTimeout(function () {
        dino.classList.remove("animate");
    }, 500);
}

let checkDead = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 270 && cactusLeft > 230 && dinoTop >= 130) {
        cactus.style.animation = "none";
        cactus.style.display = "none";
        state =  false;

        if (score > highScore) {
            highScore = score;
            hs.innerHTML = "High Score: " + Math.ceil(highScore/100);
        }
    } 
    if(cactusLeft < 230 && state) {
        score++;
        text.innerHTML = "Score: " + Math.ceil(score/100); 
    }
}, 10);


