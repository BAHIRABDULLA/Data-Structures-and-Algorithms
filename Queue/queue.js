class Node { 
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue {
    constructor(){
        this.front=null
        this.rear = null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            console.log('it is empty');
            return
        }
        let a = ''
        let curr=this.front
        while(curr){
            a+=`${curr.value} `
            curr=curr.next
        }
        console.log(a);
    }
    enqueue(value){
        const node = new Node( value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node

        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return 'underFlow'
        }
        const dequeuedItem =this.front.value
        this.front=this.front.next
        this.size--
        return dequeuedItem
    }
    peek(){
        return this.front?this.front.data:null
    }
}
const queue = new Queue()
queue.print()
queue.enqueue(3)
queue.enqueue(77)
queue.enqueue(43)
queue.print()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.dequeue());
queue.print()
