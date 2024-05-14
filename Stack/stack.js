class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack {
    constructor(){
        this.top=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
            return
        }
        let a= ''
        let curr=this.top
        while(curr){
            a+=`${curr.value} `
            curr=curr.next
        }
        console.log(a);
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
        this.size++
    }
    pop(){
        const poppedItem=this.top.value
        console.log(poppedItem,'popped Item');
        this.top=this.top.next
        this.size--
        return poppedItem
    }
    peek(){
        return this.top?this.top.value:null
    }

}
const stack = new Stack()
stack.print()
stack.push(4)
stack.push(6)
stack.push(33)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek());