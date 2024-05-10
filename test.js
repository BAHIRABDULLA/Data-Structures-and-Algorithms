//     bubble sorting   .....  poor sorting method
function bubbleSort(arr) {
    let swapped;
    do {
      swapped= false
      for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true
        }
      }
    } while (swapped);
    
  }
  let arr=[3, 1, 5, 8, 9]
  bubbleSort(arr)
  console.log(arr);
  


  
//     queue data structure
class Queue {
    constructor(){
      this.items= []
    }
    enqueue(element){
      this.items.push(element)
    }
    dequeue(){
      return this.items.shift()
    }
    isEmpty(){
      return this.items.length===0
    }
    peek(){
      if(!this.isEmpty()){
        return this.items[0]
      }
    }
    print(){
      console.log(this.items.toString())
    }
  }
  
  const n1= new Queue()
  n1.enqueue(3)
  n1.enqueue(66)
  n1.enqueue(7)
  n1.print()
  console.log(n1.isEmpty())
  console.log(n1.size())