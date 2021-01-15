import IBinaryTree from "../../data-stractures/binary-tree";
import Queue from "../../data-stractures/queue";

const bfs = <T>(root: IBinaryTree<T>) => {
    const queue = new Queue<T>();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        const { value, left, right } = queue.dequeue()!;
        console.log(value);
        if (left) {
            queue.enqueue(left)
        }
        if (right) {
            queue.enqueue(right);
        }
    }
}


export default bfs;