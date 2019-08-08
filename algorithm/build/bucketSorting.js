function bucketSorting(arr, k) {
    if (arr.length <= 1) {
        return arr;
    }
    let max = Math.max(...arr) + 1;
    const buckets = [];
    for (let i = 0; i < k; i++) {
        buckets.push(new Array());
    }
    arr.forEach(num => {
        let bucketIndex = Math.floor((num / max) * k);
        let bucket = buckets[bucketIndex];
        if (bucket.length == 0) {
            bucket.push(num);
        }
        else {
            let i = 0;
            while (i < bucket.length && num > bucket[i]) {
                i++;
            }
            let rest = bucket.splice(i);
            bucket.push(num);
            bucket.push(...rest);
        }
    });
    let result = [];
    for (let bucket of buckets) {
        result = [...result, ...bucket]; //* same as result.concat(bucket);
    }
    return result;
}
console.log(bucketSorting([], 3));
console.log(bucketSorting([1], 3));
console.log(bucketSorting([2, 5, 6, 46, 7, 8, 68, 124, 45], 3));
//# sourceMappingURL=bucketSorting.js.map