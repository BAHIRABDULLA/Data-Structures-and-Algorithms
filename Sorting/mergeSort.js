function mergeSort(arr){
    console.log('inside mergesort before if ');
    if(arr.length<2){
        console.log(arr.length,'arr.length');
        return arr
    }
    console.log('inside merge sort after if ');
    const mid= Math.floor(arr.length/2)
    console.log(mid,'mid');
    const leftArr=arr.slice(0,mid)
    console.log(leftArr,'leftArr');
    const rightArr=arr.slice(mid)
    console.log(rightArr,'rightArr');
    return merge(mergeSort(leftArr),mergeSort(rightArr)) 
}
function merge(left,right){
    console.log(left,'left in merge  -------');
    console.log(right,'right in merge +++++++');
    console.log('inside merge');
    const sortedArr=[]
    console.log(sortedArr,'sortedArr');
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
            console.log(sortedArr,'sortedArr in if condition');
        }else{
            sortedArr.push(right.shift())
            console.log(sortedArr,'sortedArr in else condition');
        }
    }
    console.log([...sortedArr,...left,...right,'@@@@@@']);
    return [...sortedArr,...left,...right]
}
console.log(mergeSort([35,-5,9,2,24,8,10]));




// const a=[35,-5,9,2,24,8,10]
// console.log(Math.floor(a.length/2));
// let b=a.slice(0,Math.floor(a.length/2))
// let c=a.slice(Math.floor(a.length/2))
// console.log(b,'b');
// console.log(c,'c');