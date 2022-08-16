import { PATH_TO_CHARACTERS } from './asset-paths.constant.js';
import {getImagePath} from './get-image-path.function.js';
import { ARROW_LEFT, ARROW_RIGHT } from './keys.constant.js';

export class Player {
    constructor(gameWidth, gameHeight, playerWidth, playerHeight, inputHandler) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = playerWidth;
        this.height = playerHeight;
        this.inputHandler = inputHandler;

        this.imageNumber = 33;
        this.x = 10;
        this.y = this.gameHeight - this.height;
        this.image = this.#getImage(this.imageNumber);
        this.speed = 0;
    }

    #update() {
        this.imageNumber++;

        if(this.inputHandler.has(ARROW_LEFT)) {
            this.speed = -5;
        } else if (this.inputHandler.has(ARROW_RIGHT)) {
            this.speed = 5;
        } else {
            this.speed = 0;
            this.imageNumber = 33;
        }
        this.image = this.#getImage(this.imageNumber);

        this.x += this.speed;
    }

    draw (ctx) {
        this.#update();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    #getImagePath (index) {
        return getImagePath((i) => `${PATH_TO_CHARACTERS}dad/run/run_${i}.png`, index % 42, 3);
    }

    #getImage (index) {
        return window[`run_${(index % 42).toString().padStart(3, '0')}`];
    }
}

