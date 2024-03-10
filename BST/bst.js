class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(val) {
        const node = new Node(val);
        if(this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if(node.val < root.val) {
            if(root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if(root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    search(root, val) {
        if(!root) {
            return false;
        } else {
            if(root.val === val) {
                return true;
            } else {
                if(val < root.val) {
                    return this.search(root.left, val);
                } else {
                    return this.search(root.right, val);
                }
            }
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }

    levelOrder(root) {
        if(root) {
            const queue = {};
            let front = 0;
            let back = 0;
            queue[front] = root;
            front ++;
            while(back <= front) {
                console.log(front,back)
                let top = (front - back) - 1;
                console.log("top", top,);
                if(queue[top] && queue[top].val) {
                    console.log(queue[top].val);
                }
                if(queue[top].left) {
                    console.log("left")
                    queue[front] = queue[top].left;
                    front ++;
                }
                if(queue[top].right) {
                    console.log("right")
                    queue[front] = queue[top].right;
                    front ++;
                }
                delete queue[top];
                back ++;
            }
        }
    }

    levelOrderRay(root) {
        if(root) {
            let queue = [];
            queue.push(root);
            while(queue.length) {
                let curr = queue.shift();
                console.log(curr.val);
                if(curr.left) {
                    queue.push(curr.left);
                }
                if(curr.right) {
                    queue.push(curr.right);
                }
            }
        }
    }

    min(root) {
        if(!root.left) {
            // console.log(root.val);
            return root.val;
        } else {
            this.min(root.left);
        }
    }

    max(root) {
        if(!root.right) {
            // console.log(root.val);
            return root.val;
        } else {
            this.max(root.right);
        }
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val);
    }

    deleteNode(root, val) {
        if(root === null) {
            return root;
        }
        if(val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else if(val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else {
            if(!root.right && !root.left) {
                return null;
            }
            if(!root.right) {
                return root.left;
            } else if(!root.left) {
                return root.right;
            }
            root.val = this.min(root.right);
            root.right = this.deleteNode(root.right, root.val);
        }
        return root;
    }
}

const bst = new BST();
// console.log(bst.isEmpty());

bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(13);
bst.insert(11);
bst.insert(4);
bst.insert(6);

// console.log(bst.search(bst.root, 80));

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrderRay(bst.root);

// bst.max(bst.root);

// bst.levelOrderRay(bst.root);

// bst.delete(6);
bst.delete(12);

bst.levelOrderRay(bst.root);


