import { Enemy } from './lib/enemy.class.js';
import { Layer } from './lib/layer.class.js';

const IMAGE_WIDTH = 2560;
const IMAGE_HEIGHT = 1440;

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = IMAGE_WIDTH * .7;
const CANVAS_HEIGHT = canvas.height = IMAGE_HEIGHT * 2 / 3 - 40;
const GAME_SPEED = 10;
let timeLastDrawn = 0;
const timeBetweenFrames = 20;
const layers = [
    new Layer('layer-1.png', 0.2, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-2.png', 0.4, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-3.png', 0.6, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-4.png', 0.8, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
];

function getFlappy() {
    return new Enemy('Flappy-Box-Bird-Sprites', (number) => `skeleton-animation_${number.toString().padStart(2, '0')}.png`, 10, Math.random(), 259, 146,
        GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH)
}

function getCar() {
    return new Enemy('Free2dgameAsset_CarsSprites', (number) => `Car PNG/car${number.toString().padStart(2, '0')}.png`, 4, 2, 259, 146,
        GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH)
}

const enemies = [
    getFlappy(), getFlappy(), getFlappy(), getCar()
];

function animate(time) {
    const deltaTime = !time ? timeBetweenFrames : time - timeLastDrawn;

    if (deltaTime >= timeBetweenFrames) {
        timeLastDrawn = time;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        layers.forEach(layer => {
            layer.draw(ctx, deltaTime);
        });
        enemies.forEach(enemy => {
            enemy.draw(ctx, deltaTime);
        });
    }

    requestAnimationFrame(animate);
}

animate(0);