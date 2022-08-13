import { Enemy } from './lib/enemy.class.js';
import { Layer } from './lib/layer.class.js';

const IMAGE_WIDTH = 2560;
const IMAGE_HEIGHT = 1440;

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = IMAGE_WIDTH * .5;
const CANVAS_HEIGHT = canvas.height = IMAGE_HEIGHT * 2 / 3 - 40;
const GAME_SPEED = 10;

const layers = [
    new Layer('layer-1.png', 0.2, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-2.png', 0.4, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-3.png', 0.6, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
    new Layer('layer-4.png', 0.8, IMAGE_WIDTH, IMAGE_HEIGHT, GAME_SPEED),
];

const enemies = [
    new Enemy('Flappy-Box-Bird-Sprites', (number) => `skeleton-animation_${number.toString().padStart(2, '0')}.png`, 11, .1, 259, 146,
        GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH)
];

const thingsToDraw = [
    ...layers, ...enemies
];
function animate(time) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    thingsToDraw.forEach(function (thing) {
        thing.draw(ctx);
    });
    requestAnimationFrame(animate);
}

animate(0);