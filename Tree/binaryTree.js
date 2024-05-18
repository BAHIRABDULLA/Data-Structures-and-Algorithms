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
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value)

    }
    searchNode(root, value) {
        if (root === null) {
            return false
        }
        if (root.value === value) {
            return true
        } else if (value < root.value) {
            return this.searchNode(root.left, value)
        } else {
            return this.searchNode(root.right, value)
        }
    }
    //   Pre-order (ROOT ->  LEFT  ->  RIGHT)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    //   in-order (LEFT  ->  ROOT  ->  RIGHT)
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    //    post-order (LEFT  ->  RIGHT  ->   ROOT)
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    //    level-order  [Breadth First Search-(BFS)]
    levelOrder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    delete(value){
        this.root= this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<this.root){
            root.left=this.deleteNode(root.left,value)
        }else if(value>this.root){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.left
            }
            if(!root.right){
                return root.right
            }
        }
    }
}
const tree = new BinarySearchTree()
console.log(tree.isEmpty());
console.log(tree);
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

console.log(tree);
console.log(tree.search(54));
tree.preOrder(tree.root)
console.log('-----');
tree.inOrder(tree.root)
console.log('---------');
tree.postOrder(tree.root)
console.log('---');
tree.levelOrder()
console.log(tree.max(tree.root),'root rooot');