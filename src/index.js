const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const pathToBackgrounds = 'assets/racing-background/PNG/Layers/'
let gameSpeed = 10;

const backgroundLayer1 = new Image();
backgroundLayer1.src = pathToBackgrounds + 'layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = pathToBackgrounds + 'layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = pathToBackgrounds + 'layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = pathToBackgrounds + 'layer-4.png';

const IMAGE_WIDTH = 2560;
const IMAGE_HEIGHT = 1440;

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = IMAGE_WIDTH;
        this.height = IMAGE_HEIGHT;
        this.x2 = this.width;
        this.image = image;
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

const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);

const layers = [
    layer1, layer2, layer3, layer4
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