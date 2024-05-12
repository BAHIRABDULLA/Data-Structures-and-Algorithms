
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i;i++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        if(i<arr.length){
            console.log(i,'true');
        }else{
            console.log(i,'false');
        }
    }
    return arr
}
console.log(bubbleSort([2,-5,9,3,8,5,17]));






function bubbleSort(arr){
    let swapped
    do{
         swapped=false
        console.log('firt log',swapped);
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
                console.log(swapped,'inner log');
                console.log(arr,'arr');
            }
        }
    }while(swapped)
    console.log(swapped,'swapped last');
    return arr
}
console.log(bubbleSort([3,1,66,34,75,-1]));