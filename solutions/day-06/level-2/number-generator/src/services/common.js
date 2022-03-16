let generateNumbersInMatrix = () => {
    let grid = new Array(31);
    let size = grid.length;
    for (let i = 0; i <= size; i++) {
        grid[i] = i;
    }
    return grid;
}
const matrixGenerated = generateNumbersInMatrix();

let isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

export let bgColor = (num) => {
    // Asigns Background color accordingly
    return isPrime(num)
        ? `prime-number`
        : num % 2 !== 0
            ? `odd-number`
            : num % 2 === 0
                ? `even-number`
                : null;
};

// let generateNumbersInMatrix = [1,2,3,4,5,6,7,8,9]
// console.log("🚀 ~ file: common.js ~ line 2 ~ generateNumbersInMatrix ~ generateNumbersInMatrix()", generateNumbersInMatrix())
export default matrixGenerated;