const IMAGE_WIDTH = 2560;
const IMAGE_HEIGHT = 1440;
const PATH_TO_BACKGROUNDS = 'assets/racing-background/PNG/Layers/'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = IMAGE_WIDTH * .5;
const CANVAS_HEIGHT = canvas.height = IMAGE_HEIGHT * 2 / 3 - 40;
let gameSpeed = 10;

class Layer {
    constructor(imagePath, speedModifier, imageWidth, imageHeight) {
        this.x = 0;
        this.y = 0;
        this.width = imageWidth;
        this.height = imageHeight;
        this.x2 = this.width;
        this.image = new Image();
        this.image.src = PATH_TO_BACKGROUNDS + imagePath;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;

    }

    update () {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layers = [
    new Layer('layer-1.png', 0.2, IMAGE_WIDTH, IMAGE_HEIGHT),
    new Layer('layer-2.png', 0.4, IMAGE_WIDTH, IMAGE_HEIGHT),
    new Layer('layer-3.png', 0.6, IMAGE_WIDTH, IMAGE_HEIGHT),
    new Layer('layer-4.png', 0.8, IMAGE_WIDTH, IMAGE_HEIGHT),
];

function animate(time) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layers.forEach(function (layer) {
        layer.update();
        layer.draw();
    });
    requestAnimationFrame(animate);
}

animate(0);