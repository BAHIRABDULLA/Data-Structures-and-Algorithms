//  Min heap
class MinHeap {
    constructor(){
        this.heap=[]
    }
    getParentIndex (index){
        return Math.floor(index-1)/2
    }
    getLeftChildIndex(index){
        return Math.floor(2*index+1)
    }
    getRightChildIndex(index){
        return Math.floor(2*index+2)
    }
    hasParent(index){
        return this.getParentIndex(index)>=0
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.heap.length
    }
    hasRightChild(index){
        return this.getRightChildIndex(index)<this.heap.length
    }
    parent(index){
        return this.heap[this.getParentIndex(index)]
    }
    leftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }
    rightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }
    swap(indexOne, indexTwo){
        [this.heap[indexOne],this.heap[indexTwo]]=[this.heap[indexTwo],this.heap[indexOne]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParent(index)&&this.parent(index)<this.heap[index]){
            this.swap(this.getParentIndex(index),index)
            index= this.getParentIndex(index)
        }
    }
    extractMax(){
        if(this.heap.length===0){
            throw new Error('heap is empty')
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const max = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return max
    }
    heapifyDown(){
        let index =0
        while(this.hasLeftChild(index)){
            let largerChildIndex=this.getLeftChildIndex(index)
            if(this.hasRightChild(index)&& this.rightChild(index)>this.leftChild(index)){
                largerChildIndex=this.getRightChildIndex(index)
            }
            if(this.heap[index]>this.heap[largerChildIndex]){
                break;
            }else{
                this.swap(index,largerChildIndex)
            }
            index=largerChildIndex
        }
    }
    peek(){
        if(this.heap.length===0){
            throw new Error('Heap is empty')
        }
        return this.heap[0]
    }


}