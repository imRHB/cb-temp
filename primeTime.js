let primeTime = (num) => {
    let prime = true;
    for (let i = num - 1; i > 1; i--) {
        if (Number.isInteger(num / i)) {
            prime = false;
        }
    }
    return prime;
};

//Control

console.log(primeTime("19"));
console.log(primeTime("110"));