class Node {
    constructor(value){
        this.value=value
        this.next=null
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
            console.log('list is empty ');
            return
        }
        let a=''
        let curr=this.head
        while(curr){
            a+=`${curr.value} `
            curr=curr.next
        }
        console.log(a);
    }
    prepend(value){
        let  node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    removeDuplicate(){
        if(this.isEmpty()){
            
            return null
        }
        let curr=this.head
       
        while(curr){
            let run=curr
            while(run.next){
                if(curr.value===run.next.value){
                    console.log(curr.value,'curr.value');
                    console.log(run.next.value,'run.next.value');
                    run.next=run.next.next
                    this.size--
                    curr=curr.next
                    this.size--
                    console.log(curr.value,'curr.value after');
                    
                }
                run=run.next
            }
            curr=curr.next
        }

    }
}
const list = new LinkedList()
list.print()
list.prepend(1)
list.prepend(2)
list.prepend(6)
list.prepend(3)
list.prepend(4)
list.prepend(6)
list.prepend(5)
list.print()
list.removeDuplicate()
list.print()