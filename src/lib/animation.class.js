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