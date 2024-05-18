class Node {
    constructor(value){
        this.value=value
        this.next= null
    }
}
class LinkedList {
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            console.log('list is emtpy');
        }
        let curr= this.head
        a=''
        while(curr){
            a+=`${curr.value} `
        }
        console.log(a);
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node 
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node =  new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            let curr= this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++

    }
}