class TreeNode<T> {
  constructor(
    private _data: T,
    private _left: TreeNode<T> = null as TreeNode<T>,
    private _right: TreeNode<T> = null as TreeNode<T>
  ) {}

  get left() {
    return this._left;
  }
  get right() {
    return this._right;
  }

  set left(node: TreeNode<T>) {
    this._left = node;
  }

  set right(node: TreeNode<T>) { //allow node.right = node
    this._right = node;
  }

  get data() {
    return this._data;
  }
}

class BinaryTree<T> {
  constructor(
    private _root: TreeNode<T> = null as TreeNode<T>
  ) {}

  insert(data: T, curr: TreeNode<T> = this._root): TreeNode<T> {
    let node = new TreeNode(data);
    if (this._root == null) {
      this._root = node;
      return;
    }

    if (curr.data > data) {
      if (curr.left == null) {
        curr.left = node;
      } else {
        return this.insert(data, curr.left);
      }
    } 

    if (curr.data < data) {
      if (curr.right == null) {
        curr.right = node;
      } else {
        return this.insert(data, curr.right);
      }
    }
    return node;
  }

  print(node: TreeNode<T> = this._root, layer: number = 0, result: Array<T[]> = []) {
    if (!this._root) {
      console.log('It is an empty tree');
    }

    if (node == null) {
      if (!result[layer]) {
        result.push([null as T]);
      } else {
        result[layer].push(null as T)
      }
      return;
    }

    console.log(node.data);
    if (!result[layer]) {
      result.push([node.data]);
    } else {
      result[layer].push(node.data)
    }
    // result.forEach(line => console.log(line));
    layer++;
    this.print(node.left, layer, result);
    this.print(node.right, layer, result);
    return result;
  }
}

var numTree = new BinaryTree<number>();
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