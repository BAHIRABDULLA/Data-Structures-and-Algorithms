class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const node  = new Node(value)
        let curr=this.root
        if(this.root==null){
            this.root=node
            return this
        }
        while(true){
            if(value===curr.value)return undefined
            if(value<curr.value){
                if(curr.left===null){
                    curr.left=node
                    return this
                }
                curr=curr.left
            }else{
                if(curr.right===null){
                    curr.right=node
                    return this
                }
                curr= curr.right
            }
        }
    }
    find(value){
        if(this.root===null)return false
        let curr = this.root
        while(curr){
            if(curr.value===value){
                return true
            }else if(value<curr.value){
                curr=curr.left
            }else{
                curr=curr.right
            }
        }
        return false

    }
    removeNode(node){
        
    }

}

const tree = new BinarySearchTree()
console.log(tree,'tree');
tree.insert(42)
tree.insert(54)
tree.insert(22)
console.log(tree,'---------');
console.log(tree.find(21));