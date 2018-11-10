// ary
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

// Example
const firstTwoMax = ary(Math.max, 2);
const result = [[2, 6, 'a'], [8, 4 ,6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]
console.log(result);

// call
const call = (key, ...args) => context => context[key](...args);


// collectInto
// Changes a function that accepts an array into a variadic function
// Given a function, return a closure that collects all inputs into an array-accepting function

const collectInto = fn => (...args) => fn(args);

// Example
const Pall = collectInto(Promise.all.bind(Promise)); // bind the function so that `this` is always Promise
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 50, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
