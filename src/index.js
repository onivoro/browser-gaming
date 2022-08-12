class Animation {
    constructor(imgPrefix, startIndex, endIndex) {
        this.frameCount = endIndex;
        this.imgPrefix = imgPrefix;

    }

    draw () {

    }

    asImage (index) {
        const img = new Image();
        img.src = `assets/${this.imgPrefix}/${this.imgPrefix}_${index.toString().padStart(3, '0')}.png`;
        console.warn(img.src)
        return img;
    }
}

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const run = new Animation('rj', 0, 36);
let i = 0;
(function animate(time) {
    if (i > run.frameCount) i = 0;
    ctx.reset();
    ctx.drawImage(run.asImage(i), 0, 0)
    console.warn(time)
    i++;
    requestAnimationFrame(animate)
})();