function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    arr.forEach((item, i) => {
        if (i != pivotIndex) {
            if (item <= pivot) {
                left.push(item);
            }
            else {
                right.push(item);
            }
        }
    });
    return mergeSort(left).concat([pivot]).concat(mergeSort(right));
}
// console.log(mergeSort([]));
// console.log(mergeSort([1]));
// console.log(mergeSort([2,1]));
// console.log(mergeSort([5,25,6,7,8,1,6]));
function binarySearch(ascArr, val, start = 0, end = null) {
    if (end === null) {
        end = ascArr.length - 1;
    }
    if (end < start) {
        return -1;
    }
    let mid = start + Math.floor((end - start) / 2);
    let pivot = ascArr[mid];
    if (pivot == val) {
        return mid;
    }
    if (pivot >= val) {
        return binarySearch(ascArr, val, 0, mid - 1);
    }
    else {
        return binarySearch(ascArr, val, mid + 1, end);
    }
}
console.log(binarySearch([1, 5, 6, 6, 7, 8, 25], 1));
console.log(binarySearch([1, 5, 6, 6, 7, 8, 25], 6));
console.log(binarySearch([1, 5, 6, 6, 7, 8, 25], 7));
console.log(binarySearch([1, 5, 6, 6, 7, 8, 25], 8));
console.log(binarySearch([1, 5, 6, 6, 7, 8, 25], 25));
//# sourceMappingURL=binarySearch.js.map