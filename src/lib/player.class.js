import { PATH_TO_CHARACTERS } from './asset-paths.constant.js';
import { getImagePath } from './get-image-path.function.js';
import { ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from './keys.constant.js';
export class Player {
    gameWidth;
    gameHeight;
    width;
    height;
    inputHandler;
    imageNumber = 33;
    x;
    y;
    image;
    speed = 0;
    vy = 0;
    weight = 1;
    constructor(gameWidth, gameHeight, width, height, inputHandler) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = width;
        this.height = height;
        this.inputHandler = inputHandler;
        this.x = 10;
        this.y = this.gameHeight - this.height;
        this.image = this.#getImage(this.imageNumber);
    }
    #update() {
        this.imageNumber++;
        if (this.inputHandler.has(ARROW_LEFT)) {
            this.speed = -5;
        }
        else if (this.inputHandler.has(ARROW_RIGHT)) {
            this.speed = 5;
        }
        else {
            this.speed = 0;
            this.imageNumber = 33;
        }
        if (this.inputHandler.has(ARROW_UP)) {
        }
        this.image = this.#getImage(this.imageNumber);
        this.x += this.speed;
    }
    draw(ctx, deltaTime) {
        this.#update();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    #getImagePath(index) {
        return getImagePath((i) => `${PATH_TO_CHARACTERS}dad/run/run_${i}.png`, index % 42, 3);
    }
    #getImage(index) {
        return window[`run_${(index % 42).toString().padStart(3, '0')}`];
    }
}
