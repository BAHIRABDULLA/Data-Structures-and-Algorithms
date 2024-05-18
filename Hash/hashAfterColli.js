class HashTable {
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let a = 0
        for(let i=0;i<key.length;i++){
            a+=key.charCodeAt(i)
        }
        console.log(a,'a--------',key);
        return a%this.size
    }
    set(key,value){
        const index = this.hash(key)
        // this.table[index]=value
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem= bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key, value])
            }
        }
        
    }
    get(key){
        const index = this.hash(key)
        // return this.table[index]
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
        
    }
    display(){
        console.log('-----');
        console.log(this.table.length,'this.table.length');
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i],'in the display');
            }
        }
    }
}
// console.log(HashTable);
const hash= new HashTable(11)
// hash.display()
hash.set('name','rishad')
hash.set('age','adhil')
hash.set('mane','jithesh')
console.log(hash.get('name'));
hash.display()
hash.set('name','diana')
hash.remove('name')
hash.display()
// console.log(hash,'hash');