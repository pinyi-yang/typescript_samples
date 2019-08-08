class QueueNode<U> {
  constructor(
    private _data = null as U,
    public next = null as QueueNode<U>
  ) {}


}

export default QueueNode;