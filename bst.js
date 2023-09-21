class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor() {
        this.root = buildTree(array);
    }
    // Insert node
    insertNode(value) {

    }

    // Remove node
    removeNode(value) {
        // edge case - deleting a leaf no concern
        // edge case - deleteing a node with (1) child the nearest parent takes over the children
        // edge case - deleting a node with (2) children / find the next biggest
    }
}

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function buildTree(array) {
    const sortedArray = [...new Set(array.sort((a, b) => a - b))];
    
    function binaryTreeRecursive(start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new Node(sortedArray[mid]);

        node.left = binaryTreeRecursive(start, mid - 1);
        node.right = binaryTreeRecursive(mid + 1, end);

        return node;
    }
    const root = binaryTreeRecursive(sortedArray[0], sortedArray.length - 1);
    return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const tree = new Tree(array);
prettyPrint(tree.root);