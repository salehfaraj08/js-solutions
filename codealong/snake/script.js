import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.querySelector('#game-board')

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000;
    window.requestAnimationFrame(main);
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}