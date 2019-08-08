function paritition(arr: number[], left: number, right: number): number {
  let mid = Math.floor((left + right) / 2);
  let pivotVal = arr[mid];
  let i = left;
  let j = right;
  while(true) {
    while(arr[i] < pivotVal) {
      i++;
    }
    while(arr[j] > pivotVal) {
      j--;
    }
    if (i >=j) {
      return j;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

  }
}

export default function quicksorting2(arr: number[], left: number = 0, right: number = null as number): void {
  if (right === null) {
    right = arr.length - 1;
  }

  if (left < right) {
    let pivot = paritition(arr, left, right);
    quicksorting2(arr, left, pivot);
    quicksorting2(arr, pivot + 1, right);
  }
}

// let a = [23,54,6,567,3,5,654,13];
// console.time('one');
// quicksorting2(a);
// console.log(a);
// console.timeEnd('one');