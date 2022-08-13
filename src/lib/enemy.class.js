import { PATH_TO_ENEMIES } from "./asset-paths.constant.js";

export class Enemy {
    constructor(imageFolder, imageNameGenerator, imageCount, speedModifier, imageWidth, imageHeight, gameSpeed, canvasHeight, canvasWidth) {
        this.imageFolder = imageFolder;
        this.imageNameGenerator = imageNameGenerator;
        this.imageCount = imageCount;
        this.width = imageWidth;
        this.height = imageHeight;
        this.speedModifier = speedModifier;
        this.gameSpeed = gameSpeed;
        this.speed = gameSpeed * this.speedModifier;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.x = 0;
        this.y = Math.random() * this.canvasHeight;
        this.image = new Image();
        this.image.src = `${PATH_TO_ENEMIES}${this.imageFolder}/${imageNameGenerator(0)}`;
    }

    #update() {
        this.speed = this.gameSpeed * this.speedModifier;
        this.image.src = `${PATH_TO_ENEMIES}${this.imageFolder}/${this.imageNameGenerator(this.x % this.imageCount)}`;
        this.x++;
        this.x = Math.floor(this.x + this.speed);
    }

    draw(ctx) {
        this.#update();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}