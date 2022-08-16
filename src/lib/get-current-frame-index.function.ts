export function getImagePathByIndex(folder, fileNameGenerator, index, imageCount) {
    const currentIndex = imageCount % index;
    const fileName = fileNameGenerator(currentIndex);
    return `${folder}${fileName}`;
}