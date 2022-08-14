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

        this.frameNumber = 0;
        this.timeBetweenFrames = 2000;
        this.direction = 1;

        this.x = 0;
        this.y = Math.random() * this.canvasHeight;
        this.image = new Image();
        this.image.src = `${PATH_TO_ENEMIES}${this.imageFolder}/${imageNameGenerator(0)}`;
    }

    #update() {
        this.speed = this.gameSpeed * this.speedModifier;
        if (this.frameNumber >= this.imageCount) { this.frameNumber = 0; }
        this.image.src = `${PATH_TO_ENEMIES}${this.imageFolder}/${this.imageNameGenerator(this.frameNumber)}`;
        this.frameNumber++;
        if (this.x > this.canvasWidth) {
            this.direction = -1;
        }

        if (this.x <= 0) {
            this.direction = 1;
        }

        this.x += this.direction;
        this.x = Math.floor(this.x +  this.direction * this.speed);
    }

    draw(ctx, deltaTime) {
        
            this.#update();        
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        
    }
}