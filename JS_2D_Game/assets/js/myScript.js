console.log("hi");

let clickCount = 0;

$("#description").css('display', 'none');

$("#instruction").click(function () {
    if (clickCount === 0) {
        $("#description").css('display', 'block');
        clickCount++;
    } else if (clickCount === 1) {
        $("#description").css('display', 'none');
        clickCount = 0;
    }
});