const memoize = fn => {
    const cache = new Map();
    const cached = function(val) {
        return cache.has(val)
            ? cache.get(val)
            : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache;
    return cached;
};

const printInput = input => {
    return input;
};

const printInputCached = memoize(printInput);

const result = printInputCached('hello');
console.log(result);
console.log(printInputCached.cache);
