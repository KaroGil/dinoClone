let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let text = document.getElementById("text");
let state = true;
let score = 0;

document.addEventListener("keydown", function (event) {
    jump();});

function jump() { 
    if (!dino.classList.contains("animate") && state) {
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
        console.log("Game Over");
        state =  false;
        score = 0;
    }else{
        score++;
        text.innerHTML = "Score: " + Math.floor(score/200); 
    }
}, 10);
