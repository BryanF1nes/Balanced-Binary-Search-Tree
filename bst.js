// Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr);
    }
}

function buildTree(arr) {
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    function buildTreeRec(start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new Node(sortedArray[mid]);
    
        node.left = buildTreeRec(start, mid - 1);
        node.right = buildTreeRec(mid + 1, end);
    
        return node;
    }

    const root = buildTreeRec(0, sortedArray.length - 1);
    return root;
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };



const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(data);

prettyPrint(tree.root)

// 1: Initialize start = 0, end = length of the array – 1
// 2: mid = (start+end)/2
// 3: Create a tree node with mid as root (lets call it A).
// 4: Recursively do following steps:
// 5: Calculate mid of left subarray and make it root of left subtree of A.
// 6: Calculate mid of right subarray and make it root of right subtree of A.