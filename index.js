import Sim from "./sim.js"

const board = document.getElementById("board");
const ctx = board.getContext("2d");
const BOARD_WIDTH = board.width;
const BOARD_HEIGHT = board.height;
let sim = new Sim(board);
sim.start()

//main loop
let lastTime = 0
let frameIndex = 0
function mainLoop(timestamp) {
    ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT)
    frameIndex++;
    const deltaTime = timestamp - lastTime;

    sim.update();
    sim.draw(ctx);

    requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)