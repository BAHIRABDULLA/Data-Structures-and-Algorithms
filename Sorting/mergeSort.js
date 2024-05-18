function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid= Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr)) 
}
function merge(left,right){
    const sortedArr=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}
console.log(mergeSort([35,-5,9,2,24,8,10]));




// const a=[35,-5,9,2,24,8,10]
// console.log(Math.floor(a.length/2));
// let b=a.slice(0,Math.floor(a.length/2))
// let c=a.slice(Math.floor(a.length/2))
// console.log(b,'b');
// console.log(c,'c');