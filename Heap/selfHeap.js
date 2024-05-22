class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeftChildIndex(index) {
        return Math.floor(2 * i + 1)
    }
    getRightChildIndex(index) {
        return Math.floor(2 * index + 2)
    }
    swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]]
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }
    extractMin() {
        if (this.heap.length === 0) {
            console.log('heap is empty');
            return
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }
    heapifyDown() {
        let index = 0
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallestIndex = this.getLeftChildIndex(index)
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] <
                this.heap[this.getLeftChildIndex(index)]) {
                smallestIndex = this.getRightChildIndex(index)
            }
            if(this.heap[index]<this.heap[smallestIndex]){
                break;
            }else{
                this.swap(index,smallestIndex)
            }
            index=smallestIndex
        }
    }
}
const minHeap = new MinHeap()
minHeap.insert(4)
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(2);
minHeap.insert(8);
console.log(minHeap);