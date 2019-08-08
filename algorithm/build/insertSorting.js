function insertSorting(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i; //implicit assignment
        while (j >= 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}
console.log(insertSorting([]));
console.log(insertSorting([1]));
console.log(insertSorting([2, 5, 6, 7546, 7, 8, 68, 124, 45]));
//# sourceMappingURL=insertSorting.js.map