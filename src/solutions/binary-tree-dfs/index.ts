import IBinaryTree from "../../data-stractures/binary-tree";

const dfs = <T>(root: IBinaryTree<T>) => {
    const { value, left, right } = root;
    if (left) {
        dfs(left);
    }
    if (right) {
        dfs(right);
    }
    console.log(value);
}

export default dfs;