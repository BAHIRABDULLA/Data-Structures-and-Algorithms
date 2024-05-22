class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let char of word ){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndOfWord=true
    }

    search(word){
        let node = this.root
        for(let char of word ){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return isEndOfWord
    }
    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node= node.children[char]
        }
        return true

    }
    delete(word){
        this.deleteHelper(this.root,word,0)
    }
    deleteHelper(node , word, depth){
        if(!ndoe){
            return false
        }
        if(depth===word.length){
            if(!node.isEndOfWord){
                return false
            }
            node.isEndOfWord=false
            return Object.keys(node.children).length===0
        }
        const char = word[depth]
        if(!this.deleteHelper(node.children[char],word,depth+1)){
            return false
        }
        delete node.children[char]
        return Object.keys(node.children).length===0&&!node.isEndOfWord
    }
    print(){
        this.printHelper(this.root,'')
    }
    printHelper(node, prefix){
        if(node.isEndOfWord){
            console.log(prefix,'prefix');
        }
        for(let char in node.children){
            this.printHelper(node.children[char],prefix+char)
        }
    }
}
const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('bat')
trie.insert('ball')
trie.print()
console.log(trie,'trie');
