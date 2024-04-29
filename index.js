//      return two values and equal target


// let arr = [2,3,1, 7,9,3]
// let target=10
// let a= []
// function twoSum(arr,target){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 console.log(arr[i],arr[j],target)
//                 a.push(i,j)
//                 return a
//             }
//         }
//     }
// return a
// }
// console.log(twoSum(arr,target));


//      another method


let arr = [2,3,1, 7,9,3]
let target=10
let a= []
function twoSum(arr,target){
    const set = new Set()
    for(i=0;i<arr.length;i++){
        const num= arr[i]
        const match = target-num
        if(set.has(match)){
            return a.push(num,match)
        }else{
            set.add(match)
        }
    }
return a
}
console.log(twoSum(arr,target));



//       assigning same value in the end of the array 


const array = [6,3,5,6,8,1,6]
let match = 6 
function myFunction(array,match){
    for(let i=0;i<array.length;i++){
        for(let j=array.length-1;j>i;j--){
            if(array[i]==match){
                if(array[i]==array[j]){
                    continue
                }else{
                    let temp=array[i]
                    array[i]=array[j]
                    array[j]=temp
                }
            }
        }
    }return array
}
console.log(myFunction(array,match))