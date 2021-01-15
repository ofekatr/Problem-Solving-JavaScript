interface IBinaryTree<T> {
    left?: IBinaryTree<T>;
    right?: IBinaryTree<T>;
    value: T;
}

export default IBinaryTree;