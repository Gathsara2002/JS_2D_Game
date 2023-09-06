let bottom = 20;
let right = 0;
let score = 0;
let scoreId;
let pauseScore = false;
let roadPositionY = 0;
let moveRoadId = 0;
let pause = false;

$(window).keydown(function (e) {
    /*event for pressing space bar*/
    if (e.keyCode === 32) {
        $("#loadingAnimation").css('display', 'none');
        moveRoad();
        setScore();
        moveEnemyCars();

        /*this is the formula for generate random value in js
        Math.floor(Math.random() * (max - min + 1) + min)*/

        /* /!*moving police car randomly*!/
         setInterval(function () {
             let num = Math.floor(Math.random() * (130 + 1));
             $("#police").css('right', num + 'px');
         }, 9000);

         /!*moving taxi car randomly*!/
         setInterval(function () {
             let num = Math.floor(Math.random() * (135 - 10 + 1) + 10);
             $("#taxi").css('left', num + 'px');
         }, 10500);

         /!*moving enemy car randomly*!/
         setInterval(function () {
             let num = Math.floor(Math.random() * (355 - 215 + 1) + 215);
             $("#enemy").css('left', num + 'px');
         }, 7000);*/
    }

    /*up arrow or w key event */
    if (e.keyCode === 38 || e.keyCode === 87) {
        bottom = bottom + 10;
    }

    /*down arrow or s key event */
    if (e.keyCode === 40 || e.keyCode === 83) {
        bottom = bottom - 10;
    }

    /*left arrow or a key event */
    if (e.keyCode === 37 || e.keyCode === 65) {
        right = right + 20;
    }

    /*right arrow or d key event */
    if (e.keyCode === 39 || e.keyCode === 68) {
        right = right - 20;
    }

    /*move player*/
    $("#player").css('bottom', bottom + 'px');
    $("#player").css('right', right + 'px');
});

/*set score*/
function setScore() {
    clearInterval(scoreId);
    if (!pauseScore) {
        scoreId = setInterval(function () {
            $("#scoreCard").text(score);
            score = score + 1;
        }, 100);
    }
}

/*pause game */
function pauseGame() {
    pauseScore = true;
    setScore();
    pause = true;
    moveRoad();
}

/*to pause enemy cars when clicked paused button*/
function pauseAnimation() {
    $("#enemy").css('animation-play-state', 'paused');
    $("#police").css('animation-play-state', 'paused');
    $("#taxi").css('animation-play-state', 'paused');
}

/*to play animation after pausing*/
function playAnimation() {
    $("#enemy").css('animation-play-state', 'running');
    $("#police").css('animation-play-state', 'running');
    $("#taxi").css('animation-play-state', 'running');
}

$("#pause").click(function () {
    pauseGame();
    pauseAnimation();
});

/*restart game*/
function restartGame() {
    pauseScore = false;
    setScore();
    pause = false;
    moveRoad();
}

$("#restart").click(function () {
    restartGame();
    playAnimation();
});

/*move road */
function moveRoad() {
    clearInterval(moveRoadId);
    if (!pause) {
        moveRoadId = setInterval(function () {
            roadPositionY = roadPositionY + 20;
            $("#track").css("background-position-y", +roadPositionY + "px");
        }, 100);
    }
}

/*move enemy cars*/
function moveEnemyCars() {
    $("#enemy").css('animation-name', 'moveEnemyCar');
    $("#police").css('animation-name', 'movePoliceCar');
    $("#taxi").css('animation-name', 'moveTaxiCar');
}

/*this function detect car crash and game over*/
function gameOver() {
    /*player car position*/
    let player_top = Math.abs(document.getElementById("player").getBoundingClientRect().top);
    let player_bottom = Math.abs(document.getElementById("player").getBoundingClientRect().bottom);
    let player_left = Math.abs(document.getElementById("player").getBoundingClientRect().left);
    let player_right = Math.abs(document.getElementById("player").getBoundingClientRect().right);

    /*taxi car position*/
    let taxi_top = Math.abs(document.getElementById("taxi").getBoundingClientRect().top);
    let taxi_bottom = Math.abs(document.getElementById("taxi").getBoundingClientRect().bottom);
    let taxi_left = Math.abs(document.getElementById("taxi").getBoundingClientRect().left);
    let taxi_right = Math.abs(document.getElementById("taxi").getBoundingClientRect().right);

    /*police car position*/
    let police_top = Math.abs(document.getElementById("police").getBoundingClientRect().top);
    let police_bottom = Math.abs(document.getElementById("police").getBoundingClientRect().bottom);
    let police_left = Math.abs(document.getElementById("police").getBoundingClientRect().left);
    let police_right = Math.abs(document.getElementById("police").getBoundingClientRect().right);

    /*enemy car position*/
    let enemy_top = Math.abs(document.getElementById("enemy").getBoundingClientRect().top);
    let enemy_bottom = Math.abs(document.getElementById("enemy").getBoundingClientRect().bottom);
    let enemy_left = Math.abs(document.getElementById("enemy").getBoundingClientRect().left);
    let enemy_right = Math.abs(document.getElementById("enemy").getBoundingClientRect().right);

    /*check is car outside of track*/
    /* if (player_right > 810 || player_right < 240) {
         alert("Game Over");
     }*/

    /*detect collapse between player and police*/
    if (((police_left < player_right && player_right < police_right) || (police_left < player_left && police_right > player_left)) &&
        ((police_top < player_top && police_bottom > player_top) || (player_bottom < police_bottom && player_bottom > police_top))) {
        console.log("Game over");
    }
}

let gameOverId = setInterval(gameOver, 100);

