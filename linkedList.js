//     Singly linked list 

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head= null
//     }

//     add(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head=newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current= current.next
//             }
//             current.next= newNode
//         }
//     }

//     printList(){
//         let current= this.head;
//         while(current){
//             console.log(current.data);
//             current= current.next
//         }
//     }
// }

// const myList = new LinkedList()
// myList.add(1)
// myList.add(2)
// myList.add(3)
// myList.printList()





class Node {
    constructor(data){
        this.data=data
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
    prepend(data){
        const node = new Node(data)
        if(!this.head){
            this.head= node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('it is empty bro ...')
        }else{
            let current= this.head
            let currentList = ''
            while(current){
                currentList+=`${current.data} `
                current= current.next
            }
            console.log(currentList);
        }
    }
}
const n1 = new LinkedList()
n1.print()
n1.prepend(3)
n1.prepend(6)
n1.prepend(4)
n1.print()
console.log(n1.isEmpty()); 



//     Doubly linked list






  














