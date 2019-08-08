class TreeNode {
    constructor(_data, _left = null, _right = null) {
        this._data = _data;
        this._left = _left;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    set left(node) {
        this._left = node;
    }
    set right(node) {
        this._right = node;
    }
    get data() {
        return this._data;
    }
}
class BinaryTree {
    constructor(_root = null) {
        this._root = _root;
    }
    insert(data, curr = this._root) {
        let node = new TreeNode(data);
        if (this._root == null) {
            this._root = node;
            return;
        }
        if (curr.data > data) {
            if (curr.left == null) {
                curr.left = node;
            }
            else {
                return this.insert(data, curr.left);
            }
        }
        if (curr.data < data) {
            if (curr.right == null) {
                curr.right = node;
            }
            else {
                return this.insert(data, curr.right);
            }
        }
        return node;
    }
    print(node = this._root, layer = 0, result = []) {
        if (!this._root) {
            console.log('It is an empty tree');
        }
        if (node == null) {
            if (!result[layer]) {
                result.push([null]);
            }
            else {
                result[layer].push(null);
            }
            return;
        }
        console.log(node.data);
        if (!result[layer]) {
            result.push([node.data]);
        }
        else {
            result[layer].push(node.data);
        }
        // result.forEach(line => console.log(line));
        layer++;
        this.print(node.left, layer, result);
        this.print(node.right, layer, result);
        return result;
    }
}
var numTree = new BinaryTree();
numTree.print();
numTree.insert(30);
numTree.insert(10);
numTree.insert(20);
numTree.insert(25);
numTree.insert(35);
numTree.insert(11);
numTree.insert(5);
numTree.insert(40);
numTree.insert(45);
numTree.print().forEach(line => console.log(line));
//# sourceMappingURL=BinaryTree.js.map