//     Singly linked list 
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
  getSize() {
    return this.size
  }
  print() {
    if (this.isEmpty()) {
      console.log('list is empty');
      return
    }
    let curr = this.head
    let a = ''
    while (curr) {
      a += `${curr.value} `
      curr = curr.next
    }
    console.log(a);
  }
  //    adding a node at the front of the list
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  //    adding a node in the end of the list
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
    this.size++
  }
  //     inserting a value by basis of index(with 'for' loop iteration)
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      let node = new Node(value)
      let curr = this.head

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }
      node.next = curr.next
      curr.next = node
      this.size++
    }
  }
  //     reverse the linked list
  reverse() {
    let prev = null
    let curr = this.head
    while (curr != null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }
  //      deleting value in the basis of value
  deleteByValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next
    } else {
      let curr = this.head
      while (curr.next) {
        if (curr.next.value === value) {
          curr.next = curr.next.next
        } else {
          curr = curr.next
        }
      }
    }
    this.size--
  }
  //      deleting a value in the basis of index(iterate with 'for' loop)
  deleteByIndex(index) {
    if (index === 0) {
      this.head = this.head.next
    } else {
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }
      curr.next = curr.next.next
    }
    this.size--
  }
  //     searching index by values
  search(value) {
    if (this.isEmpty()) {
      return null
    }
    let i = 0
    let curr = this.head
    while (curr) {
      if (curr.value == value) {
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }
  //      deleting duplcate elements in the list
  removeDuplicate() {
    let curr = this.head
    while (curr) {
      let run = curr
      while (run.next) {
        if (curr.value === run.next.value) {
          run.next = run.next.next
        } else {
          run = run.next
        }
      }
      curr = curr.next
    }
  }
}


const list = new LinkedList()
list.print()
list.prepend(4)
list.prepend(7)
list.print()
list.append(3)
list.append(9)
list.print()
list.insert(6, 2)
list.insert(88, 3)
list.print()
list.reverse()
list.print()
list.deleteByValue(9)
list.deleteByIndex(2)
list.print()
const arr = [5, 26, 7, 3, 8]
arr.forEach(value => list.append(value))
list.print()
list.removeDuplicate()
list.print()



// findMid() {
//   let curr = this.head

//   let a = Math.floor((this.size) / 2)
//   console.log(a, 'a');
//   for (let i = 0; i < this.size; i++) {

//     if (i === a) {
//       return curr.value
//     } else {
//       curr = curr.next
//     }
//   }
// }


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
