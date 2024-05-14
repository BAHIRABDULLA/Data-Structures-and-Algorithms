class HashTable {
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let a = 0
        for(let i=0;i<key.length;i++){
            a+=key.charCodeAt(i)
            // console.log(a,'a');
        }
        console.log(a,'a--------');
        return a%this.size
    }
    set(key,value){
        const index = this.hash(key)
        // this.table[index]=value
        let bucket = this.table[index]
        if(!bucket){
            bucket=[[key,value]]
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
        return this.table[index]
    }
    display(){
        console.log('-----');
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i],'in the display');
            }
        }
    }
}
// console.log(HashTable);
const hash= new HashTable(11)
hash.set('name','rishad')
hash.set('age','adhil')
hash.set('mii','jithesh')
hash.get('name')
hash.display()