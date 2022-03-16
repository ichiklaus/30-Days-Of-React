const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let randomColorGenerator = () => {
    let hex = "";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    return hex;
}

let matrixGenerator = () => {
    const arr = new Array(31);
    let arrSize = arr.length;
    for (let i = 0; i <= arrSize; i++) {
        arr[i] = `#${randomColorGenerator()}`;
    }
    return arr;
}
let hexMatrix = matrixGenerator();
console.log("🚀 ~ file: common.js ~ line 15 ~ hexMatrix", hexMatrix);
export default hexMatrix;