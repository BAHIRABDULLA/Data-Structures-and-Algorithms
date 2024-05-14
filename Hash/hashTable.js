class HashTable {
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total =0
        console.log('-------------------------');
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
            // console.log(total,'total');
        }
        return total % this.size
    }
    set(key,value){
        const index= this.hash(key)
        this.table[index]=value
    }
    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)
// console.log(table,'table');
table.set('age',25)
table.set('name','bruce')
table.set('mane','clark')
table.display()
// console.log(table,'tabtab');
// console.log(table.get('name'));
// table.remove('name')
// table.display()