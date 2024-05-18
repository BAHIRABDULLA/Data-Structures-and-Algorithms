// console.log('hai');
// function mergeSort(arr) {
//     console.log('++++++++++');
//     if (arr.length < 2) {
//         console.log(arr.length,'-----------');
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     console.log(mid,'mid');
//     let left = arr.slice(0, mid)
//     console.log(left,'left');
//     let right = arr.slice(mid)
//     console.log(right,'right');

//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left,right){
//     console.log(left,'left *****' ,right,'*****');
//     const sortedArray = []
//     console.log(sortedArray,'sorted arra []');
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift())
//             console.log(sortedArray,'###########');
//         }else{
//             sortedArray.push(right.shift())
//             console.log(sortedArray,'$$$$$$$');
//         }
//     }
//     console.log(...sortedArray,'...sorted array ',...left,
//         '...left',...right,'...right'
//     );
//     return [...sortedArray,...left,...right]
// }
// console.log(mergeSort([3,  9,-5, 66, -3, 33]));




// function quickSort(arr){
//     console.log('#################');
//     if(arr.length<2){
//         console.log('++++++++++');
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     console.log(pivot,'pivot -----');
//     let leftArray = []
//     let rightArray = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArray.push(arr[i])
//         }else{
//             rightArray.push(arr[i])
//         }
//     }
//     console.log(leftArray,'left      Arrray ');
//     console.log(rightArray,'right    array ');
//     return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
// }
// console.log(quickSort([5,2,0,99,34,-11]));


// console.log('hai');



// function selectionSort(arr){
//     for(let i = 0;i<arr.length;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min!==i){
//             [arr[i],arr[min]]=[arr[min],arr[i]]
//         }
//     }return arr
// }
// console.log(selectionSort([3,52,56,262,22]));






// function bubbleSort(arr){
//     for(let i = 0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }return arr
// }
// console.log(bubbleSort([5,2,66,22,-5,6]));





// function insertionSort(arr){
//     for(let i = 1;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }
// console.log(insertionSort([52,6,22,-1,66,3]));

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let leftArray=[]
//     let rightArray=[]
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArray.push(arr[i])
//         }else{
//             rightArray.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
// }
// console.log(quickSort([5,21,6,-66,44,5]));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)-
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortedArray= []
//     while(left.length&&right.length){
//         if(left[0]>right[0]){
//             sortedArray.push(right.shift())
//         }else{
//             sortedArray.push(left.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }
// console.log(mergeSort([5,3,9,33, -5, 66]));


// class HashTable {
//     constructor(size){
//         this.table= new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let count =0
//         for(let i =0;i<key.length;i++){
//             count+=key.charCodeAt(i)
//         }
//         return count%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         if(this.table[index]){
//             this.table[index].push([value])
//         }else{
//             this.table[index]=[[key,value]]
//         }
//     }
//     get(key){
//         const index= this.hash(key)
//         if(this.table[index]){

//         }
//     }
//     display(){
//         if(this.table.length<0){
//             console.log('table is empty');
//             return 
//         }
//         for(let i =0;i<this.table.length;i++){
//             console.log(this.table[i]);
//         }
//     }
//     remove(key){
//         const index = this.hash(key)
//         if(this.table[index]){
//             let a=this.table[index].find(ele=>ele===key)
//             if(a){
//                 this.table[index].splice(thsi)
//             }
//         }
//     }
// }
// const hashtable=new HashTable(12)
// hashtable.set('name','siva')
// hashtable.set('age',44)
// hashtable.set('mane','bahir')
// hashtable.display()


// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     isEmpty(){
//         this.items.length===0
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(this.items){

//             this.items.shift()
//         }
//     }
//     peek(){
//         this.items[0]
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }
// const queue = new Queue()

// queue.enqueue(3)
// queue.enqueue(6)
// queue.enqueue(2)
// queue.dequeue()
// queue.print()




// class Stack {
//     constructor(){
//         this.items=[]
//     }
//     isEmpty(){
//        return  this.items.length==0
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items.pop()
//     }
//     peek(){
//         this.items[this.items.length-1]
//     }
//     print(){
//         let a =''
//         for(let i=0;i<this.items.length;i++){
//             a+=`${this.items[i]} `
//         }
// //         console.log(a);
// //     }
// // }
// // const stack = new Stack()
// // stack.push(5)
// // stack.push(6)
// // stack.print()
// //  console.log(stack.pop());
// //  stack.print()



// // function reverseStringUsingStack(inputString) {
// //     const stack = [];
// //     for (let char of inputString) {
// //         stack.push(char);
// //     }

// //     let reversedString = '';

// //     while (stack.length > 0) {
// //         reversedString += stack.pop();
// //     }
// //     return reversedString;
// // }


// // const inputString = "Hello, world!";
// // const reversedString = reverseStringUsingStack(inputString);
// // console.log("Original String:", inputString); 
// // console.log("Reversed String:", reversedString); 


// // function reversedString(str){
// //     const stack = []
// //     for(let i = 0;i<str.length;i++){
// //         stack.push(str[i])
// //     }
// //     let reversedString=''
// //     while(stack.length){
// //         reversedString+=stack.pop()
// //     }
// //     return reversedString
// // }
// // console.log(reversedString('jithesh'));


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let count = 0
//         for (let i = 0; i < key.length; i++) {
//             count += key.charCodeAt(i)
//         }
//         return count % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[
//                 [key,value]]
//         }else{
//             const sameKeyItem=bucket.find(ele=>ele[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index= this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(elem=>elem[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }return undefined
//     }
//     display() {
        
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]){
//                console.log(i,this.table[i]);
//             }
//         }
        
//     }
// }

// const table = new HashTable(120)
// table.set('name','rishads')
// table.set('mane','fdf')
// table.set('age','ffdfdgfbf')
// table.display()
// console.log(table.get('mane'));




class Node{ 
    constructor(value){
        this.value=value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.edn=null
        this.size=0
    }
    print(){
        if(this.edn.next==null){
            return 
        }

        return this.edn 
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node = new Node(value)
        
        if(this.isEmpty()){
            this.top=value
            this.edn=value
        }else{
            while()
        }
        this.size++
    }
    
}