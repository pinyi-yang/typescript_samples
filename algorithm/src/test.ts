import quicksorting2 from './quicksorting2';
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

let a = [23,54,6,567,3,5,654,13];
console.time('one');
quicksorting2(a);
console.log(a);
console.timeEnd('one');