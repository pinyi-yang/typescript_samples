function Fabonacci(num) {
    if (num <= 0) {
        return 0;
    }
    if (num <= 2) {
        return 1;
    }
    return Fabonacci(num - 1) + Fabonacci(num - 2);
}
console.log(Fabonacci(5));
console.log(Fabonacci(9));
console.log(Fabonacci(34));
console.log('done');
//# sourceMappingURL=Fabonacci.js.map