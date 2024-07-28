const fibonacci = function(n) {
    let nr = typeof n === 'number' ? n : parseInt(n);

    if (nr < 0) return "OOPS";
    if (nr == 0) return 0;

    const fib = [0, 1];
    for (let i = 2; i <= nr; i++)
        fib[i] = fib[i - 1] + fib[i - 2];

    return fib[nr];
};

// Do not edit below this line
module.exports = fibonacci;
