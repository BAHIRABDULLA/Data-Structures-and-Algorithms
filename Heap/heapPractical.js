const heap=[]
function heapPush(heap,value){
    heap.push(value)
    let curr= heap.length-1
    console.log(curr,'curr');
    while(curr>0){
        let parent=Math.floor((curr-1)/2)
        if(heap[curr]<heap[parent]){
            [heap[curr],heap[parent]]=[heap[parent],heap[curr]]
            curr=parent
        }else{
            break
        }
    }
}
function heapPop(heap){
    const n = heap.length
    console.log(n,'n');
    [heap[0],heap[n-1]]=[heap[n-1],heap[0]]
    const removedKey = heap.pop()
    let curr=0
    while(2*curr+1<heap.length){
        const leftIndex= 2*curr+1
        const rightIndex=2*curr+2
        const minChildIndex=(rightIndex<heap.length&&heap[rightIndex]<heap[leftIndex])?rightIndex:leftIndex
        if(heap[minChildIndex]<heap[curr]){
            [heap[minChildIndex],heap[curr]]=[heap[curr],heap[minChildIndex]]
            curr=minChildIndex
        }else{
            break;
        }
    }
    return removedKey
}
function perColateDown(heap,index){
    let curr = index
    while(2*curr+1<heap.length){
        const leftIndex=2*curr+1
        const rightIndex = 2*curr+2
        const minChildIndex = (rightIndex<heap.length&& heap[rightIndex]<heap[rightIndex])?rightIndex:leftIndex
        if(heap[minChildIndex]<heap[curr]){
            [heap[minChildIndex],heap[curr]]=[heap[curr]=heap[minChildIndex]]
            curr=minChildIndex
        }else{
            break
        }
    }
}
function heapify(arr){
    for(let curr of arr){
        perColateDown(arr,curr)
    }
}

heapPush(heap,9)
heapPush(heap,41)
heapPush(heap,54)
heapPush(heap,14)
heapPush(heap,6)
heapPush(heap,33)
console.log(heap,'heap');

console.log(heapPop(heap));
console.log(heap,'heap in remval');
heapify([5,2,82,34])
console.log(heap,'------');