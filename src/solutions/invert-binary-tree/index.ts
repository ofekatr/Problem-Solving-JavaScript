import IBinaryTree from "../../types/binary-tree";

const invertBinaryTree = <T>(root: IBinaryTree<T>): void => {
    if (root.left) {
        invertBinaryTree(root.left);
    }
    if (root.right) {
        invertBinaryTree(root.right);
    }
    [root.right, root.left] = [root.left, root.right];
}

export default invertBinaryTree;