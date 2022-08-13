const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const pathToBackgrounds = 'assets/racing-background/PNG/Layers/'
let gameSpeed = 12;

const backgroundLayer1 = new Image();
backgroundLayer1.src = pathToBackgrounds + 'layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = pathToBackgrounds + 'layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = pathToBackgrounds + 'layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = pathToBackgrounds + 'layer-4.png';

const imageWidth = 2560;
let x = 0;
let x2 =imageWidth;

const img = backgroundLayer3;

function animate(time) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(img, x, 0);
    ctx.drawImage(img, x2, 0);
    if (x < -imageWidth) {x = imageWidth - gameSpeed;}
    else { 
        x -= gameSpeed;    
    }
    if (x2 < -imageWidth) {x2 = imageWidth - gameSpeed}
    else { 
        x2 -= gameSpeed;    
    }
    requestAnimationFrame(animate);
}

animate(0);