// const names = new Array(1, 1.2, null, undefined, "bobo", "rose", true);
// console.log(names);
// const array = [1, 1.2, null, undefined, "bobo", "rose", true];
// console.log(array);
// const arr = ["apple", "banana"];
// console.log(arr);
// arr[0] = "orange";
// arr[5] = "pine-apple";
// arr[6] = "apple";
// arr[3] = "book";
// arr[100] = "book";
// console.log(arr);
// console.log(arr[5]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// const a = [1, 2, 3, 4];
// const b = ["a", "b", "c"];
// const c = [a, b];
// const arr = [...a, ...b]; //spread operator
// console.log(c);
// console.log(arr);

// const a = [1, 2, 3, 4, 5, 6, "mgmg"];
// console.log(Array.isArray(a));
// console.log(a.indexOf("mgmg"));
// console.log(a.splice(2, 1));
// console.log(a.splice(2, 2));
// console.log(a);

// console.log(b);
// a.push("apple");
// a.unshift("pine-apple");
// a.pop();
// a.pop();
// a.pop();
// a.shift();
// a.shift();
// console.log(a);
// const a = [1, 2, 3, 4, 5, 6];
// const [aa, bb, ...cc] = a; //array destructure & (...rest operator)
// console.log(aa);
// console.log(bb);
// console.log(cc);
// console.log(cc[2]);

const arr = [
  1,
  11,
  111,
  2,
  222,
  22,
  3,
  4,
  55,
  333,
  1000,
  "cat",
  "cane-ball",
  "aaa",
  "banana",
  "pine-apple",
  "water-melon",
];
// console.log(arr.includes("apple"));
// console.log(arr.includes("banana"));
// console.log(arr.reverse());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));
// const aa = arr.join("/");
// console.log(aa);
const a = [
  [1, 2, 3, 4, [11, 22, ["a", "b", "c"], 33, 44]],
  [1, 2, 3, 4, [11, 22, ["aa", "bb", "cb"], 33, 44]],
  [1, 2, 3, 4, [11, 22, ["aaa", ["mgmg", "aungaung"], "bbb", "cbb"], 33, 44]],
];
console.log(a);
console.log(a[2]);
console.log(a[2][4]);
console.log(a[2][4][2]);
console.log(a[2][4][2][1]);
console.log(a[2][4][2][1][0]);
