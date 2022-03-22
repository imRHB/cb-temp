let permute = (function () {
    return permute;

    function permute(list) {
        return list.length ?
            list.reduce(permutate, []) :
            [[]];
    }

    function permutate(permutations, item, index, list) {
        return permutations.concat(permute(
            list.slice(0, index).concat(
                list.slice(index + 1)))
            .map(concat, [item]));
    }

    function concat(list) {
        return this.concat(list);
    }
}());

function isPrime(n) {
    for (let i = 2, m = Math.sqrt(n); i <= m; i++)
        if (n % i === 0) return false;
    return true;
}

function PrimeChecker(num) {
    return permute(num.toString(10).split("")).some(function (xs) {
        return isPrime(parseInt(xs.join(""), 10));
    }) ? 1 : 0;
}

console.log(PrimeChecker(100));
