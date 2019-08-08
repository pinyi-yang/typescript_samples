"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quicksorting2_1 = __importDefault(require("./quicksorting2"));
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }
// let {a, b, ...rest} = obj;
// console.log(rest.c);
// let a: any[] = [[],[]];
// let b = a[1];
// b.push('test');
// console.log(a[1]);
let a = [23, 54, 6, 567, 3, 5, 654, 13];
console.time('one');
quicksorting2_1.default(a);
console.log(a);
console.timeEnd('one');
//# sourceMappingURL=test.js.map