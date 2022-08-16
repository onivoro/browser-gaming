var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Layer_instances, _Layer_update;
import { PATH_TO_BACKGROUNDS } from "./asset-paths.constant.js";
export class Layer {
    constructor(imagePath, speedModifier, width, height, gameSpeed) {
        this.imagePath = imagePath;
        this.speedModifier = speedModifier;
        this.width = width;
        this.height = height;
        this.gameSpeed = gameSpeed;
        _Layer_instances.add(this);
        this.speed = gameSpeed * this.speedModifier;
        this.x = 0;
        this.y = 0;
        this.x2 = this.width;
        this.image = new Image();
        this.image.src = PATH_TO_BACKGROUNDS + imagePath;
        this.timeBetweenFrames = 20;
    }
    draw(ctx, deltaTime) {
        __classPrivateFieldGet(this, _Layer_instances, "m", _Layer_update).call(this);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}
_Layer_instances = new WeakSet(), _Layer_update = function _Layer_update() {
    this.speed = this.gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
        this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
        this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
};
