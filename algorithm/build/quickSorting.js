"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quickSorting(arr) {
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
    return quickSorting(left).concat([pivot]).concat(quickSorting(right));
}
exports.quickSorting = quickSorting;
//# sourceMappingURL=quickSorting.js.map