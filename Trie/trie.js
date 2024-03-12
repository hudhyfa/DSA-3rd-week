class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if(!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new Node();
            }
            curr = curr.children[charToInsert];
        }
        curr.isEnd = true;
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if(!(charToFind in curr.children)) return false;
            curr = curr.children[charToFind];
        }
        return curr.isEnd;
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apply");

console.log(trie.contains("app  "));