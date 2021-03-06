//todo planning
//* data structure: hash table [[],[],[],[],[],[],[],[]]
//* in each []: {key: value}
//? hash table
class HashTable {
    constructor(_size, _data = [] //?alterway: Array<Array<IHashItem<U>>>
    ) {
        this._size = _size;
        this._data = _data;
        for (let i = 0; i < this._size; i++) {
            this._data.push([]);
        }
    }
    hashFunction(key) {
        let hash = 0;
        if (key.length === 0) {
            return hash;
        }
        for (let i = 0; i < key.length; i++) {
            let char = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }
    hashKeyToIndex(key) {
        let hashKey = this.hashFunction(key);
        let index = hashKey % this._size;
        return index;
    }
    insert(key, value) {
        let hashIndex = this.hashKeyToIndex(key);
        let item = {};
        item[key] = value;
        this._data[hashIndex].push(item);
    }
    search(key) {
        let hashIndex = this.hashKeyToIndex(key);
        let items = this._data[hashIndex];
        for (let i = 0; i < items.length; i++) {
            let item = this._data[hashIndex][i];
            if (item.hasOwnProperty(key)) {
                return item;
            }
        }
        return null;
    }
    delete(key) {
        let hashIndex = this.hashKeyToIndex(key);
        for (let i = 0; i < this._data[hashIndex].length; i++) {
            if (this._data[hashIndex][i].hasOwnProperty(key)) {
                let deleteItem = this._data[hashIndex].splice(i, 1)[0];
                return deleteItem;
            }
        }
        return null;
    }
    print() {
        for (let item of this._data) {
            console.log(item);
        }
    }
}
var t = new HashTable(8);
t.insert('Gavin', 'This is Gavin string.');
t.insert('Carlo', 'This is Carlo string.');
t.insert('Michael', 'This is Mike string.');
t.insert('Steve', 'This is Steve string.');
t.insert('Garrett', 'This is Garrett string.');
t.insert('Justin', 'This is Justin string.');
t.insert('Pinyi', 'This is Pinyi string.');
t.print();
var result = t.search('Garrett');
console.log('Search Result', result);
console.log('delete', t.delete('Garrett'));
t.print();
//# sourceMappingURL=hashtable.js.map