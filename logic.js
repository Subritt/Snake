const canv = document.querySelector("#gc");
const ctx = canv.getContext("2d");
const score = document.querySelector("#score");
let px=py=10;
let gs=tc=20;
let ax=ay=15;
let xv=yv=0;
let trail = [];
let tail = 5;

window.onload = function() {
    score.textContent = 0;
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}


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

    // Canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // Apple
    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

    // Snake
    ctx.fillStyle = "lime";
    trail.forEach(el => {
        ctx.fillRect(el.x*gs, el.y*gs, gs-2, gs-2);
        if (el.x === px && el.y === py) {

            if (trail.length > 1) {
                score.textContent = tail-5;
                alert(`GAME OVER! \n SCORE: ${tail-5}`);
                score.textContent = 0;
            }
            
            px=py=10;
            gs=tc=20;
            ax=ay=15;
            xv=yv=0;
            trail = [];
            tail = 5;
            
        }
    });

    trail.push({x: px, y: py});
    
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax === px && ay === py) {
        tail++;
        score.textContent = tail-5;
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