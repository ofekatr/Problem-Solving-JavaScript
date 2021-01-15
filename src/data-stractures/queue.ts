import _ from "lodash";
import IBinaryTree from "./binary-tree";

class Queue<T> {
    private items: Array<IBinaryTree<T>>;

    constructor() {
        this.items = [];
    }

    enqueue(i_NewItem: IBinaryTree<T>): void {
        this.items.push(i_NewItem);
    }

    dequeue(): IBinaryTree<T> | undefined {
        return this.items.shift();
    }

    empty(): void {
        this.items = [];
    }

    isEmpty(): boolean {
        return _.isEmpty(this.items);
    }
}

export default Queue;