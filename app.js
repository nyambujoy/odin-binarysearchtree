class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value)
    }
    searchNode(root, value) {
        if (root === null) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.searchNode(root.left, value)
            } else {
                return this.searchNode(root.right, value)

            }
        }

    }
    levelOrderOptimized() {
        const queue = {}
        let rear = 0
        let front = 0
        if (this.isEmpty()) {
            return
        }
        queue[rear++] = this.root
        while (front < rear) {
            let curr = queue[front]
            delete queue[front]
            front++
            console.log(curr.value)
            if (curr.left) {
                queue[rear++] = curr.left
            }
            if (curr.right) {
                queue[rear++] = curr.right
            }

        }
    }
    levelOrderNormal() {
        if (this.isEmpty()) {
            return;
        }
        const queue = []
        queue.push(this.root)
        while (queue.length !== 0) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }

        }
    }
    // dlr
    preorder(root) {
        if (root) {
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    // ldr
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    // lrd
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)

        }
    }
    inorderCallB(callback) {
        let result = []
        function traverse(root) {
            if (root) {
                traverse(root.left)
                if (callback) {
                    callback(root.value)
                } else {
                    result.push(root.value)
                }
                traverse(root.right)
            }
        }
        traverse(this.root)
        return result
    }
    //dlr
    preorderCallb(callback) {

        let result = []
        function traverse(root) {
            if (root) {
                if (callback) {
                    callback(this.root.value)
                } else {
                    result.push(root.value)
                }
                traverse(root.left)
                traverse(root.right)

            }


        }
        traverse(this.root)
        return result;
    }
    //lrd
    postOrderCallB(callback) {

        let result = []
        function traverse(root) {
            if (root) {
                traverse(root.left)
                traverse(root.right)
                if (callback) {
                    callback(this.root.value)
                } else {
                    result.push(root.value)
                }
            }

        }
        traverse(this.root)
        return result
    }
    height(root) {
        if (root === null) {
            return -1;
        }
        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)

        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
    }
    depth(value) {
        return this.depthNode(this.root, value)
    }
    depthNode(root, value, currentDepth = 0) {
        if (root === null) {
            return -1
        }
        if (root.value === value) {
            return currentDepth
        }
        if (root.value < value) {
            return this.depthNode(root.left, value, currentDepth + 1)
        } else {
            return this.depthNode(root.right, value, currentDepth + 1)

        }
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
console.log(bst.isEmpty())
console.log(bst.search(10))
// bst.levelOrder()
// bst.levelOrderNormal()
// bst.preorder(bst.root)
bst.inorder(bst.root)
// bst.postOrder(bst.root)
// bst.inorderCallB(value => console.log(value))
// console.log(bst.inorderCallB())
// console.log(bst.preorderCallb())
// console.log(bst.postOrderCallB())
console.log("Height of the tree:", bst.height(bst.root));
console.log("Depth of node with value 10:", bst.depth(10));
