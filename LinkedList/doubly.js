//     Doubly linked list
class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
  }
  class DoubleList {
    constructor(){
        this.head= null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty ');
        }else{
            let curr=this.head
            let a=''
            while(curr){
                a+=`${curr.value} `
                curr=curr.next
            }
            console.log(a);
        }
    }
    prepend(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }
    append(value){
        let  node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node=this.tail
        }
        this.size++
    }
  }
  const dList = new DoubleList()
  dList.print()
  dList.prepend(4)
  dList.prepend(7)
  dList.print()
  