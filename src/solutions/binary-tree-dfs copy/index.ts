import IBinaryTree from "../../data-stractures/binary-tree";

const dfs = <T>(root: IBinaryTree<T>) => {
    const { value, left, right } = root;
    if (left) {
        console.log("There's left:");
        dfs(left);
    }
    if (right) {
        console.log("There's right:");
        dfs(right);
    }
    console.log("Done here, going back up.");
}

export default dfs;