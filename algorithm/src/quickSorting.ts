export function quickSorting<T>(arr: Array<T>): Array<T> {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length/2);
  let pivot = arr[pivotIndex];
  let left: Array<T> = [];
  let right: Array<T> = [];
  arr.forEach((item, i) => {
    if (i != pivotIndex) {
      if (item <= pivot) {
        left.push(item);
      } else {
        right.push(item);
      }
    }
  })

  return quickSorting(left).concat([pivot]).concat(quickSorting(right));
}