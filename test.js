//    fibanocci   problem
// const fib= [0,1]
// function fibanocci(n){
//   for(let i=2;i<n;i++){
//     fib[i]=fib[i-1]+fib[i-2]
//   }
//   return fib
// }

// console.log(fibanocci(2))
// console.log(fibanocci(5))
// console.log(fibanocci(7))


//      factorial number
// function factorial (n){
//     let result=1
//   for(i=2;i<=n;i++){
//     result= result*i
//   }
//   return result
// }
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(4))





//     prime number
// function isPrime(n){
//   if(n<2){
//     return false
//   }
//   for(let i=2;i<n;i++){
//     if(n%i===0){
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))



//      linear search
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 5));
// console.log(linearSearch([3, 5, 2, 1, 6], 2));
// console.log(linearSearch([3, 5, 2, 1, 6], -1));




//     binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    console.log(right, "right");
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
  console.log(binarySearch([3, 4, 5, 7, 9], 7));
  console.log(binarySearch([3, 4, 5, 7, 9, 44], 39));




  
//     recursive binary search
function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
  }
  function search(arr,target,left,right){
    if(left>right){
      return -1
    }
    let mid= Math.floor((left+right)/2)
    if(target==arr[mid]){
      return mid
    }
    if(target<arr[mid]){
      return search(arr,target,left,mid-1)
    }else{
      return search(arr,target,mid+1,right)
    }
  }
  console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10],3))
  console.log(recursiveBinarySearch([-5,2,4,6,10],6))
  console.log(recursiveBinarySearch([4,6,7,9],40))



  
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




  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let count=0
  for(i=0;i<nums.length;i++){
      for(j=i+1;j<nums.length;j++){
          if(i<j&&nums[i]+nums[j]<target){
              count++
          }
      }
  }return count 
};