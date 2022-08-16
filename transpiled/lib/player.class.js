var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_instances, _Player_update, _Player_getImagePath, _Player_getImage;
import { PATH_TO_CHARACTERS } from './asset-paths.constant.js';
import { getImagePath } from './get-image-path.function.js';
import { ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from './keys.constant.js';
export class Player {
    constructor(gameWidth, gameHeight, width, height, inputHandler) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = width;
        this.height = height;
        this.inputHandler = inputHandler;
        _Player_instances.add(this);
        this.imageNumber = 33;
        this.speed = 0;
        this.vy = 0;
        this.weight = 1;
        this.x = 10;
        this.y = this.gameHeight - this.height;
        this.image = __classPrivateFieldGet(this, _Player_instances, "m", _Player_getImage).call(this, this.imageNumber);
    }
    draw(ctx, deltaTime) {
        __classPrivateFieldGet(this, _Player_instances, "m", _Player_update).call(this);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
_Player_instances = new WeakSet(), _Player_update = function _Player_update() {
    this.imageNumber++;
    if (this.inputHandler.has(ARROW_LEFT)) {
        this.speed = -5;
    }
    else if (this.inputHandler.has(ARROW_RIGHT)) {
        this.speed = 5;
    }
    else {
        this.speed = 0;
        this.imageNumber = 33;
    }
    if (this.inputHandler.has(ARROW_UP)) {
    }
    this.image = __classPrivateFieldGet(this, _Player_instances, "m", _Player_getImage).call(this, this.imageNumber);
    this.x += this.speed;
}, _Player_getImagePath = function _Player_getImagePath(index) {
    return getImagePath((i) => `${PATH_TO_CHARACTERS}dad/run/run_${i}.png`, index % 42, 3);
}, _Player_getImage = function _Player_getImage(index) {
    return window[`run_${(index % 42).toString().padStart(3, '0')}`];
};
