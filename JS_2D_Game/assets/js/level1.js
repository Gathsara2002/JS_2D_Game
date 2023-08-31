$(window).keydown(function (e) {
    /*event for pressing space bar*/
    if (e.keyCode === 32) {
        $("#loadingAnimation").css('display', 'none');
    }

    /*up arrow or w key event */
    if (e.keyCode === 38 || e.keyCode === 87) {
       alert("w , up");
    }

    /*down arrow or s key event */
    if (e.keyCode === 40 || e.keyCode === 83) {
       alert("s , down");
    }

    /*left arrow or a key event */
    if (e.keyCode === 37 || e.keyCode === 65) {
        alert("a , left");
    }

    /*right arrow or d key event */
    if (e.keyCode === 39 || e.keyCode === 68) {
        alert("d , right");
    }
});