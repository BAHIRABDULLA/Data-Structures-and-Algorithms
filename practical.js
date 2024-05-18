//     this is normal hash map creating 


// const collection = new Map()
// collection.set('name',43434)
// collection.set('jane',342341)
// console.log(collection,'colleciton');
// console.log(collection.get('name'));
// console.log(collection.size);

// for(let [key,value] of collection){
//     // console.log(key,value);
//     console.log(`${key} ${value}`);
// }


//    this is our own hash table implimentation

// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size=size
//     }

//     hash(key){
//         console.log(key,'key');
//         let count=0
//         console.log('- - - - - - - - - - -');
//         for(let i=0;i<key.length;i++){
//             count+=key.charCodeAt(i)
//             // console.log(count);
//         }
//         return count%this.table.length
//     }
//     set(key,value){
//         const index=this.hash(key)
//         console.log(index,'index');
//         // const bucket = this.table[index]
//         this.table[index]=[key,value]
//         console.log(this.table[index],'this.table[index]');
//         this.size++
//     }
//     get(key){
//         const index=this.hash(key)
//         console.log(index,'index in get key ');
//         return this.table[index]
//     }
//     remove(key){
//         const index=this.hash(key)
//         if(this.table[index]&& this.table[index].length){
//             this.table[index]=undefined
//             this.size--
//             return true
//         }else{
//             return false
//         }

//     }

// }
// const  ht = new HashTable(127)
// console.log(ht,'ht');
// ht.set('canada',300)
// ht.set('india',5000)
// ht.set('russia',10233)
// console.log(ht,'ht  -  -  - ht');
// console.log(ht.get('canada'),'searchaing canada');
// console.log(ht.remove('canada'));
// console.log(ht,'ht');



class HashTable {
    constructor(size) {
        this.table = new Array(127)
        this.size = 0
    }
    hash(key) {
        let count = 0
        for (let i = 0; i < key.length; i++) {
            count += key.charCodeAt(i)
        }
        return count % this.table.length
    }
    set(key, value) {
        console.log(this.table.length, 'this.table.length');
        const index = this.hash(key)
        console.log(index, 'index in set');
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                console.log(this.table[index].length, '++++++++++++');
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value
                    return
                }
            }
            this.table[index].push([key, value])
        } else {
            this.table[index] = []
            this.table[index].push([key, value])
        }
        this.size++
        console.log(this.table.length, '');
    }
    get(key) {
        const index = this.hash(key)
        console.log(index, 'index in get');
        // return this.table[index]
        if (this.table[index]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1]
                }
            }
        } return undefined
    }
    remove(key) {
        //     const index= this.hash(key)
        //     if(this.table[index]){
        //         this.table[index]=undefined
        //         this.size--
        //         return true
        //     }else{
        //         return false
        //     }
        const index = this.hash(key)
        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1)
                    this.size--
                    return true
                }
            }
        }else{
            return false
        }
    }
    display(){
        this.table.forEach((value,index)=>{
            const chainedValues=value.map(
                ([key,value])=>[`${key} : ${value}`]
            )
            console.log(`${index} : ${chainedValues}`);
        })
    }

}
const table = new HashTable()
console.log(table);
table.set('name', 'bahir')
table.set('mane', '343')
table.set('anme','lalalala')
table.set('age', 22)

console.log(table);
console.log(table.get('mane'));
table.display()
