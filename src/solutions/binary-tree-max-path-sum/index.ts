import BinaryTree from  "../../data-stractures/binary-tree";

/**
 * @description Returns the maximal sum of node values in a path inside the binary tree.
*/
 const maxSum = (root: BinaryTree<number>): number => {
    const { left, right, value } = root;
    let leftMax: number = left ? maxSum(left) : 0;
    let rightMax: number = right ? maxSum(right) : 0;
    return value + Math.max(leftMax, rightMax);
}