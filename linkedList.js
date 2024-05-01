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




// class Node {
//     constructor(value){
//       this.value=value
//       this.next= null
//     }
//   }

//   class LinkedList {
//     constructor(){
//       this.head= null
//       this.size= 0
//     }

//     isEmpty(){
//       return this.size===0
//     }

//     getSize(){
//       return this.size
//     }
//     prepend(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//         this.head= node
//       }else{
//         node.next=this.head
//         this.head= node
//       }
//       this.size++
//     }
//     append(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//         this.head=node
//       }else{
//         let prev=this.head
//         while(prev.next){
//           prev=prev.next
//         }
//         prev.next=node
//       }
//       this.size++
//     }
//     insert(value,index){
//       if(index<0||index>this.size){
//         return 
//       }
//       if(index==0){
//         this.prepend(value)
//       }else{
//         const node= new Node(value)
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//           prev=prev.next
//           console.log(prev,'prev in for')
//         }
//         node.next=prev.next
//         console.log(node.next,'node.next',prev,'prev',prev.next,'fdfd')
//         prev.next=node
//         this.size++
//       }

//     }
//     removeIndex(index){
//         if(index<0||index>=this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next

//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty() ){
//             return null
//         }
//         if(value===this.head.value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let prev=this.head
//             console.log(prev,'prev in else condition ')
//             while(prev.next && prev.next.value  !== value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let removeNode= prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null

//         }
//     }

//     //     searching index by values
//     search(value){
//         if(this.isEmpty()){
//             return null
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value==value){
//                 return i 
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     //    reversing linked list 

//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next= curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//     print(){
//       if(this.isEmpty()){
//         console.log('it is empty')
//       }else{
//         let current = this.head
//         while(current){
//           console.log(current.value)
//           current= current.next
//         }
//       }

//     }
//   }

//   const list = new LinkedList()
//   console.log(list.isEmpty())
//   console.log(list.getSize())
//   list.print()

//   list.prepend(3)
//   list.print()
//   console.log('after 3 ')
//   list.prepend(5)
//   list.print()
//   console.log('after 5')

//   list.prepend(9)
//   list.print()
//   console.log('after 9 ')

//   list.append(4)
//   list.print()
//   console.log('after 4 ')
//   list.insert(33,3)
//   list.print()
//   console.log('after insert')
// //   console.log(list.removeIndex(0))
// console.log(list.getSize(),'getSize');
// console.log(list.removeValue(4)); 
//   list.print()
// console.log(list.getSize(),'getSizefdfdfdfdf');

// console.log(list.search(55),'search')
// list.reverse()
// list.print()
//   // console.log(list)





/////                           this is just work out 

console.log('its working...');
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }
  print() {
    if (this.isEmpty()) {
      console.log('list is empty ');
      return
    }
    let a = ''
    let curr = this.head
    while (curr !== null) {
      a += `${curr.value} `
      curr=curr.next
    }
    console.log(a);
    return
  }
  arrayAdd(nums) {
    if (nums.length <= 0) {
      console.log('it is empty bro...');
      return
    }
    this.head = new Node(nums[0])
    let curr=this.head
    for (let i = 1; i < nums.length; i++) {
      curr.next = new Node(nums[i])
      curr=curr.next
    }
    this.size=nums.length
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
    const node = new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
      let curr = this.head
      while(curr.next){
        curr=curr.next
      }
      curr.next=node
    }
    this.size++
  }
  // removeFromFront(){
  //   if(this.isEmpty()){
  //     return null
  //   }else{
  //     this.head=this.head.next
  //     this.size--
  //   }
  // }
  removeByIndex(index){
    if(this.isEmpty()){
      return null
    }
    let removeNode
    if(index==0){
      removeNode=this.head
      this.head=this.head.next
    }else{
      let prev=this.head
      
      for(let i=0;i<index-1;i++){
        prev=prev.next
      }
      removeNode=prev.next
      prev.next=removeNode.next
    }
    this.size--
    return removeNode.value

  }

}
const list = new LinkedList()
const nums = [3, 2, 65, 2, 9]
list.arrayAdd(nums)
console.log(list.isEmpty());
list.prepend(4)
list.append(0)

list.print()
console.log(list,'list');

//     Doubly linked list





















