// type numToChar = {
//   '2': string[],
//   '3': string[],
//   '4': string[],
//   '5': string[],
//   '6': string[],
//   '7': string[],
//   '8': string[],
//   '9': string[]
// }
var numToChar = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];
class PhoneKeyNode {
    constructor(_data = null, _next = []) {
        this._data = _data;
        this._next = _next;
    }
    get data() {
        return this._data;
    }
    get next() {
        return this._next;
    }
    set data(char) {
        this._data = char;
    }
    set next(nodes) {
        this._next = nodes;
    }
}
class PhoneKeyTree {
    constructor(_numToChar = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ], _number = '', _head = []) {
        this._numToChar = _numToChar;
        this._number = _number;
        this._head = _head;
    }
    get number() {
        return this._number;
    }
    insert(num) {
        this._number += num.toString();
        if (num == 1 || num == 0) {
            return;
        }
        let nodes = this._numToChar[num].map(char => (new PhoneKeyNode(char)));
        if (this._head.length == 0) {
            this._head = nodes;
        }
        else {
            let currNodes = this._head;
            while (currNodes[0].next.length > 0) {
                currNodes = currNodes[0].next;
            }
            currNodes.forEach(node => {
                node.next = nodes;
            });
        }
    }
    list() {
        var result = [];
        if (this._head.length == 0)
            return result;
        function getWord(node, word = '') {
            if (node.next.length == 0) {
                result.push(word);
                return;
            }
            else {
                node.next.forEach(node => {
                    return getWord(node, word + node.data);
                });
            }
        }
        let startNode = new PhoneKeyNode('', this._head);
        getWord(startNode);
        return result;
    }
}
var input = new PhoneKeyTree();
input.insert(4);
input.insert(6);
input.insert(6);
input.insert(3);
console.log(input.number, ': ');
console.log(input.list());
//# sourceMappingURL=preditiveText.js.map