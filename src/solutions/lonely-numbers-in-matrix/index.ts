const checkIfLonely = (matrix: number[][], i: number, j: number) => {
    const left = Math.max(0, j - 1);
    const right = Math.min(matrix[i].length - 1, j + 1);
    const top = Math.max(0, i - 1);
    const bottom = Math.min(matrix.length, i + 1);
    for (let m = top; m <= bottom; m++) {
        for (let n = left; n <= right; n++) {
            if (matrix[m][n] !== 0 && !(m === i && n === j)) { return false; }
        }
    }
    return true;
}

const countLonelyNumbers = (matrix: number[][]) => {
    let resultCounter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (checkIfLonely(matrix, i, j)) resultCounter++;
        }
    }

    return resultCounter;
}

export { countLonelyNumbers };