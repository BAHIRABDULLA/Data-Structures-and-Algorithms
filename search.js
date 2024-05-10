//   Linear search
function linearSearch (arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
// console.log(linearSearch([3,5,21,1,6,8],5));



//     Binary search
function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }
        if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }return -1
}
// console.log(binarySearch([3,5,6,7,9,22,44],6));



//     Recursive Binary search
function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    }
    if(arr[mid]<target){
        return search(arr,target,left+1,right)
    }else{
        return search(arr,target,left,mid-1)
    }
}
// console.log(recursiveBinarySearch([2,3,4,5,6,7,8],6));



//      element value change to zero
function changeToZero(array,value){
    let arr=array.toSorted((a,b)=>a-b)
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        console.log(mid,'mid');
        if(arr[mid]==value){
            arr[mid]=0
            return arr
        }
        if(arr[mid]>value){
            right=mid-1
    
        }else{
            left=mid+1
        }
    }
   return -1

}
// console.log(changeToZero([1,2,3,4,9,5,6,7],2));