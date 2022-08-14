import { PATH_TO_BACKGROUNDS } from "./asset-paths.constant.js";

export class Layer {
    constructor(imagePath, speedModifier, imageWidth, imageHeight, gameSpeed) {
        this.width = imageWidth;
        this.height = imageHeight;
        this.speedModifier = speedModifier;
        this.gameSpeed = gameSpeed;
        this.speed = gameSpeed * this.speedModifier;

        this.x = 0;
        this.y = 0;
        this.x2 = this.width;
        this.image = new Image();
        this.image.src = PATH_TO_BACKGROUNDS + imagePath;
        this.timeBetweenFrames = 20;
    }

    #update() {
        this.speed = this.gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw(ctx, deltaTime) {

        this.#update();

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);

    }
}