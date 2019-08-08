class Sets<T> {
  private _data: Array<T> = [];
  constructor(data: Array<T>) {
    data.forEach(item => {
      if (this._data.indexOf(item) == -1) {
        this._data.push(item);
      }
    })
  }

  //* return length of sets
  length() {
    return this._data.length;
  }

  insert(val: T): void {
    if (this._data.indexOf(val) != -1) {
      console.log('value already exists in the sets');
    } else {
      this._data.push(val);
    }
  }

  remove(val: T): void {
    let index = this._data.indexOf(val);
    if ( index == -1) {
      console.log('value is not found.')
    } else {
      this._data.splice(index, 1);
    }
  }

  has(val: T): boolean {
    if(this._data.indexOf(val) == -1) {
      return false;
    }
    return true;
  }

  union(set: Array<T>): Array<T> {
    let result = this._data.slice(0);
    set.forEach(item => {
      if (result.indexOf(item) == -1) {
        result.push(item);
      }
    })

    return result;
  }

  difference(set: Array<T>): Array<T> {
    let result: Array<T> = [];
    set.forEach(item => {
      if (result.indexOf(item) == -1) {
        result.push(item);
      }
    });

    this._data.forEach(item => {
      if (result.indexOf(item) == -1 && set.indexOf(item) == -1) {
        result.push(item);
      }
    })

    return result;
  }

  print(): void {
    console.log(this._data);
  }
}


var mySet = new Sets([1,2,3,4,5]);
var mySet2 = new Sets([1,1,2,2,3,3,3,4,5]);
// constructor testing passed
// mySet.print();
// mySet2.print();


//add testing
mySet.insert(5);
mySet.insert(6);
mySet.print();


