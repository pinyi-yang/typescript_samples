// import QueueNode from './QueueNode';  if implement as linked list

//implement with Array
class Queue<T> {
  constructor(
    private _data: Array<T> = []
  ) {}

  enqueue(item:T):void {
    this._data.push(item);
  }

  dequeue():T {
    return this._data.shift() as T;
  }
}

var q = new Queue<string>(); //* if not specify type in <>, default will be set to any
// var q = new Queue<any>(); <a>
q.enqueue('hello');
q.enqueue('world');

var stringQueue = new Queue<string>();
var numberQueue = new Queue<number>();

