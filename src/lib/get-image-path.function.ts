export function getImagePath (pathFun, index, padLength) {
    return `${pathFun(index.toString().padStart(padLength, '0'))}`;
};