function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let key=arr[i]
    let j=i-1
    while(j>=0&&arr[j]>key){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
  }
  return arr
}
console.log(insertionSort([32,44,4,2,3,6,22,10]));





// function insertionSort(arr){
//     for(let i=1;i<arr.length-1;i++){
//         let temp=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }
// console.log(insertionSort([3,4,1,6,3,8,6,9]));

