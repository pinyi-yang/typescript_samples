class ListNode<T> {
  constructor(
    private _data: T,
    public next = null as ListNode<T>
  ) {}

  get data() {
    return this._data;
  }
}

class LinkedList<T> {
  constructor(
    private _head = null as ListNode<T>
  ) {}

  add(data: T): void {
    let node = new ListNode(data);
    if (!this._head) {
      this._head = node
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  reverse(): void {
    function reverseOne(current: ListNode<T>, next: ListNode<T>):ListNode<T> {
      if (next) {
        let inputnext = next.next;
        next.next = current;
        return reverseOne(next, inputnext)
      } else {
        return current;
      }
    }

    if(!this._head) {
      console.log('this is an empty list');
    } else {
      let current = this._head;
      let next = current.next;
      current.next = null;
      this._head = reverseOne(current, next)
    }
  }

  print(): void {
    if (!this._head) {
      console.log('this is an empty list');
    } else {
      let result = 'head';
      let current = this._head;
      while (current) {
        result = result + ` -> ${current.data}`;
        current = current.next;
      }
      console.log(result);
    }
  }
}

var ll = new LinkedList<number>();
ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
ll.print();
ll.reverse()
ll.print();