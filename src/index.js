import { Character } from './lib/character.class.js';
import { Enemy } from './lib/enemy.class.js';
import { InputHandler } from './lib/input-handler.class.js';
import { Layer } from './lib/layer.class.js';
import { Player } from './lib/player.class.js';

const BACKGROUND_IMAGE_WIDTH = 2560;
const BACKGROUND_IMAGE_HEIGHT = 1440;

window.addEventListener('load', () => {


    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width = BACKGROUND_IMAGE_WIDTH * .4;
    const CANVAS_HEIGHT = canvas.height = BACKGROUND_IMAGE_HEIGHT * 2 / 3 - 40;
    const GAME_SPEED = 10;
    let lastTime = 0;
    const timeBetweenFrames = 20;
    const layers = [
        new Layer('layer-1.png', 0.2, BACKGROUND_IMAGE_WIDTH, BACKGROUND_IMAGE_HEIGHT, GAME_SPEED),
        new Layer('layer-2.png', 0.4, BACKGROUND_IMAGE_WIDTH, BACKGROUND_IMAGE_HEIGHT, GAME_SPEED),
        new Layer('layer-3.png', 0.6, BACKGROUND_IMAGE_WIDTH, BACKGROUND_IMAGE_HEIGHT, GAME_SPEED),
        new Layer('layer-4.png', 0.8, BACKGROUND_IMAGE_WIDTH, BACKGROUND_IMAGE_HEIGHT, GAME_SPEED),
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

    const characters = [
        new Character('dad', (number) => `run/run_${number.toString().padStart(3, '0')}.png`, 42, 1, 114, 176, GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH),
        new Character('dad', (number) => `rj/rj_${number.toString().padStart(3, '0')}.png`, 36, .5, 114, 176, GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH),
        new Character('dad', (number) => `ko/ko_${number.toString().padStart(3, '0')}.png`, 42, .5, 114, 176, GAME_SPEED, CANVAS_HEIGHT, CANVAS_WIDTH),
    ];

    const inputHandler = new InputHandler();

    const player = new Player(CANVAS_WIDTH, CANVAS_HEIGHT, 114, 176, inputHandler);

    function animate(time) {
        const deltaTime = !time ? timeBetweenFrames : time - lastTime;

        
            lastTime = time;
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            layers.forEach(layer => {
                layer.draw(ctx, deltaTime);
            });
            // enemies.forEach(enemy => {
            //     enemy.draw(ctx, deltaTime);
            // });
            // characters.forEach(character => {
            //     character.draw(ctx, deltaTime);
            // })
        

        player.draw(ctx, deltaTime);

        requestAnimationFrame(animate);
    }

    animate(0);
});