let bottom=10;
let right=0;

$(window).keydown(function (e) {
    /*event for pressing space bar*/
    if (e.keyCode === 32) {
        $("#loadingAnimation").css('display', 'none');
        setScore();
    }

    /*up arrow or w key event */
    if (e.keyCode === 38 || e.keyCode === 87) {
        //alert("w , up");
        bottom=bottom+10;
    }

    /*down arrow or s key event */
    if (e.keyCode === 40 || e.keyCode === 83) {
        //alert("s , down");
        bottom=bottom-10;
    }

    /*left arrow or a key event */
    if (e.keyCode === 37 || e.keyCode === 65) {
        //alert("a , left");
        right=right+20;
    }

    /*right arrow or d key event */
    if (e.keyCode === 39 || e.keyCode === 68) {
        //alert("d , right");
        right=right-20;
    }

    /*move player*/
    $("#player").css('bottom',bottom+'px');
    $("#player").css('right',right+'px');
});


let score = 0;
let scoreId;
let pauseScore=false;

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
$("#pause").click(function () {
    pauseScore=true;
    setScore();
});

/*restart game*/
$("#restart").click(function () {
    pauseScore=false;
    setScore();
});