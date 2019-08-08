function mergeSorting(arr:number[]): number[] {
  function merge(left: number[], right: number[]): number[] {
    if (left.length == 0) {
      return right;
    }
    if (right.length == 0) {
      return left;
    }
    
    let result = [] as number[];
    let rightindex = 0;
    left.forEach(lftnum => {
      while(rightindex < right.length && right[rightindex] < lftnum) {
        result.push(right[rightindex]);
        rightindex++;
      }
      result.push(lftnum);
    })

    if (rightindex != right.length) {
      result.push(...right.slice(rightindex));
    }

    return result;
  }

  if (arr.length <=1) {
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  return merge(mergeSorting(arr.slice(0, mid)), mergeSorting(arr.slice(mid)));
}

console.log(mergeSorting([]));
console.log(mergeSorting([1]));
console.log(mergeSorting([45,56,7,569]));