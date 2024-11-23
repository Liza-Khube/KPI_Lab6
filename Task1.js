// Task 1
// Option 1

const pipe = (...funcs) => {
    for (const func of funcs) {
        if (typeof func != "function") throw new Error("One of the given values is not a function")
    };
    return x => funcs.reduce((acc, currentFunc) => currentFunc(acc), x); 
};

// Option 2

const pipe2 = (...funcs) => x => {
    let reslt = x;
    for (i = 0; i < funcs.length; i++) {
        try {
            if (typeof funcs[i] != "function") throw new Error(`Warning! The given value on position ${i + 1} is not a function.`);
            reslt = funcs[i](reslt);
        } catch (e) {console.error(e.message)};
    };
    return reslt;
}

/*
Examples:

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const num = 7;

Checking:
const f = pipe2(inc, twice, num, cube);
const res = f(5);
console.log(res);
*/