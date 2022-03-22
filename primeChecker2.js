/*
Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

*/
function PrimeChecker(num) {
    num = num.toString();
    var permutations = permute(num);
    // console.log(permutations);
    var sum = 0;
    var selectedArr;
    for (var m = 0; m < permutations.length; m++) {
        selectedArr = permutations[m]
        selectedArr = selectedArr.split("").map(Number);
        sum = 0;
        // console.log(selectedArr);
        for (var n = 0; n < selectedArr.length; n++) {
            sum += selectedArr[n]

            if (isPrime(sum)) {
                return 1;
            }
        }
    }
    return 0;
}


var permArr = [], usedNums = [];

function permute(input) {
    var num, numbers;
    numbers = input.split("");

    for (var i = 0; i < numbers.length; i++) {
        num = numbers.splice(i, 1);
        usedNums.push(num);
        if (numbers.length == 0) {
            permArr[permArr.length] = usedNums.join("");
        }
        permute(numbers.join(""));
        numbers.splice(i, 0, num)
        usedNums.pop();
    }
    return permArr;
}

function isPrime(number) {
    // console.log(number);
    if (number < 2) return false;
    for (var p = 2; p < number; p++) {
        if (number % p == 0) {
            return false;
        }
    }
    return true;
}

console.log(PrimeChecker(910));