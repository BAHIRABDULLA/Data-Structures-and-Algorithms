// sum of elements in array in recursion 
 function sumOfArray(array){
    if(array.length===0){
        return 0
    }
    return array[0]+sumOfArray(array.slice(1))
 }
 console.log(sumOfArray([3,5,2,6,5,7]));



//     palindrome usign recursion 
 function palindromeString(str){
    if(str.length<=1){
        return true
    }
    if(str.charAt(0) !== str.charAt(str.length-1)){
        return false
    }
    return isPalindrome(str.slice(1,-1))
 }
 console.log(palindromeString('hola'));



// factorial   recursion 
function factorial(value){
    if(value===1){
        return value
    }
    return value * factorial(value-1)
}
console.log(factorial(5));



//   fibanocci    recursion 
function fibanocci(value){
    if(value<2){
        return value
    }
    return fibanocci(value-1)+fibanocci(value-2)
}
console.log(fibanocci(5));




//     string reverse 
function reverseString(str){
    if(str===''){
        return ''
    }else{
        console.log(reverseString(str.substr(1))+str.charAt(0));
        return reverseString(str.substr(1))+str.charAt(0)
    }

}
console.log(reverseString('welcome'));



//       this is another method to reverse string
function reverseString(str){
    if(str===''){
        return ''
    }
    return str.charAt(-1)+reverseString(str.slice(0,-1))
}
console.log();


function reverseString(str){
    if(str===''){
        return ''
    }
    return str.slice(-1)+reverseString(str.slice(0,-1))
}
const str='racecar'
if(str===reverseString(str)){
    console.log('palindrome');
}else{
    console.log('not ');
}