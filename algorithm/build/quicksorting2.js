"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paritition(arr, left, right) {
    let mid = Math.floor((left + right) / 2);
    let pivotVal = arr[mid];
    let i = left;
    let j = right;
    while (true) {
        while (arr[i] < pivotVal) {
            i++;
        }
        while (arr[j] > pivotVal) {
            j--;
        }
        if (i >= j) {
            return j;
        }
        else {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
function quicksorting2(arr, left = 0, right = null) {
    if (right === null) {
        right = arr.length - 1;
    }
    if (left < right) {
        let pivot = paritition(arr, left, right);
        quicksorting2(arr, left, pivot);
        quicksorting2(arr, pivot + 1, right);
    }
}
exports.default = quicksorting2;
// let a = [23,54,6,567,3,5,654,13];
// console.time('one');
// quicksorting2(a);
// console.log(a);
// console.timeEnd('one');
//# sourceMappingURL=quicksorting2.js.map