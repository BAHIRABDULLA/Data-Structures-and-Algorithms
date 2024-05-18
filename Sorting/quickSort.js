// console.log('df');

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     console.log(arr,'arrrrr');
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([3,1,-55,33,66]));
// // console.log(quickSort([3,4,5,6,8,9]));

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftArray=[]
    let rightArray =[]
    for(let i = 0 ; i< arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    console.log(leftArray,'leftArray ');
    console.log(rightArray,'rihgtArray ');
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]

}
console.log(quickSort([4,1,66, 3, -4,5]));

