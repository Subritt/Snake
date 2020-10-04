window.onload = function() {
    let canv = document.querySelector(".gc");
    let ctx = canv.getContext("2D");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}

let px=py=10;
let gs=tc=20;
let ax=ay=15;
let xv=yv=0;
let trail = [];
let tail = 5;

function game() {
    px += xv;
    py += yv;

    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

    ctx.fillStyle = "lime";
    trail.forEach(el => {
        ctx.fillRect(el.x*gs, el.y*gs, gs-2, gs-2);
        if (el.x === px && el.y === py) {
            tail = 5;
        }
    });
    trail.push({x: px, y: py});
    
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax === px && ay === py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
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