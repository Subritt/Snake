window.onload = function() {
    canv = document.querySelector(".gc");
    ctx = canv.getContext("2D");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}

let xv=yv=0

function game() {
    
}

function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}