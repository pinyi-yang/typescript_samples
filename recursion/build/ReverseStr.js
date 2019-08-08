function ReverseStr(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + str.slice(0, -1);
}
console.log(ReverseStr('ab'));
console.log(ReverseStr(''));
console.log(ReverseStr('abcdefg'));
//# sourceMappingURL=ReverseStr.js.map