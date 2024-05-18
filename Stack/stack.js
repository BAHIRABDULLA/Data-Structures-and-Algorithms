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




//    reverse a string 

// class Stack {
//     constructor(){
        
//         this.items=[]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//        return this.items.pop()
//     }
//     print(){
//         let a =''
//         for(let i =0;i<this.items.length;i++){
//             a+= `${this.items[i]} `
            
//         }console.log(a)
//     }
// }
// const stack = new Stack()
// stack.push(4)
// stack.push(6)
// stack.push(7)
// stack.push(2)
// stack.pop()
// stack.print()
// function reverseString(str){
//     const stack =new Stack()
//     for(let s of str){
//         stack.push(s)
//     }
//     console.log(stack)
//     let reverseString=''
//         while(!stack.isEmpty()){
//         reverseString+=stack.pop()
//     }
//     return reverseString
// }


// console.log(reverseString('malappu'))
