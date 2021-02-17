const swap = (arr: number[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]];

const abSort = (arr: number[], a: number, b: number): void => {
    let leftBorder = 0;
    let rightBorder = arr.length - 1;
    let offset = 0;

    while (leftBorder + offset <= rightBorder) {
        if (arr[leftBorder + offset] <= a) {
            swap(arr, leftBorder, leftBorder + offset);
            leftBorder++;
            continue;
        }
        if (arr[leftBorder + offset] >= b) {
            swap(arr, rightBorder, leftBorder + offset);
            rightBorder--;
            continue;
        }
        offset++;
    }
};

export { abSort };