//     prime number
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(1))



//   finding vowel
function findVowel(str) {
    const vowels = "aeiouAEIOU";
    let a = [];
    for (let char of str) {
        if (vowels.includes(char)) {
            a.push(char);
        }
    }
    return a;
}
// console.log(findVowel("hello"));



//     finding maximum counted value
function arrayOccurence(array) {
    let maxEl = 0
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++
            }
        }
        if (maxCount < count) {
            maxCount = count
            maxEl = array[i]
        }
    }
    return [maxCount, maxEl]
}
// console.log(arrayOccurence([3, 2, 3, 2, 3, 5, 6, 6, 7]));



//      changing alphabets to another alphabet
function getAlphebts(str, n) {
    let a = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        console.log(char, 'char');
        let ascii = char.charCodeAt(0)
        console.log(ascii);
        let newAscii = ascii + n
        if ((ascii >= 65 && ascii <= 90 && newAscii > 90) || (ascii >= 97 && ascii <= 122 && newAscii > 122)) {
            newAscii -= 26
        }
        if (ascii < 65 || ascii > 90 && ascii < 97 || ascii > 122)
            a += String.fromCharCode(newAscii)
    }
    return a
}
// console.log(getAlphebts('Hello, World!', 3));



function alphepets(str, n) {
    const alphepets = 'qwertyuioplkjhgfdsazxcvbnm'
    let a = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        const index = alphepets.indexOf(char)
        console.log(index, 'indez');
        if (index !== -1) {
            const newIndex = (index + n) % 26
            const newChar = alphepets[newIndex]
            a += char === str[i] ? newChar : newChar.toUpperCase()
        } else {
            a += str[i]
        }
    }
    return a
}
// console.log(alphepets('Hello, World!', 3));



//      return two values and equal target
function twoSum(arr,target){
    let a= []
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                console.log(arr[i],arr[j],target)
                a.push(i,j)
                return a
            }
        }
    }
return a
}
// console.log(twoSum([2,3,1, 7,9,3],10));



//      another method
function twoSum(arr, target) {
    let a = []
    const set = new Set()
    for (i = 0; i < arr.length; i++) {
        const num = arr[i]
        const match = target - num
        if (set.has(match)) {
            return a.push(num, match)
        } else {
            set.add(match)
        }
    }
    return a
}
console.log(twoSum([2, 3, 1, 7, 9, 3], 10));



//     assigning same value in the end of the array 
const array = [6, 3, 5, 6, 8, 1, 6]
let match = 6
function myFunction(array, match) {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[i] == match) {
                if (array[i] == array[j]) {
                    continue
                } else {
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
        }
    } return array
}
// console.log(myFunction(array, match))



//    words swapping method  Hello World ---->   World Hello
function reverseWords(str) {
    let a = ''
    let b = ''
    let space = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            space = true
        } else {
            if (!space) {
                a += str[i]
            } else {
                b += str[i]
            }
        }

    } return b + ' ' + a
}
// console.log(reverseWords('Hello World'));



// checking string is palindrome or not 
function checkPalindrome(str){
    let count = 0
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            count = 1
            break
        }
    }
    if (count === 0) {
        console.log('palindrome');
    } else {
        console.log('not');
    }
}
// console.log(checkPalindrome('malayalam'));