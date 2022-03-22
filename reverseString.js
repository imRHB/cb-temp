/* function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let string = 'coderbyte';

const result = reverseString(string);
console.log(result); */

function firstReverse(str) {
    return str.split("").reverse().join("");
}

//Control

console.log(firstReverse("coderbyte"));
  //console.log(firstReverse('I Love Code'));