//FUNCTION ONE WHICH RETURNS COMBINATION INDEX ARRAY
function combinationIndexes(str) {
    //VARIABLE DECLARATION
    let string = str; //ORIGINAL STRING
    let strLength = string.length - 1; //STRING LENGTH VARIABLE
    let combinationIndexArr = []; //COMBINATION INDEX ARRAY VARIABLE
    let tmpArr1 = []; //TEMP ARRAY 1 TO CREATE COMBINATION INDEX ARRAY
    let tmpArr2 = []; //TEMP ARRAY 2 TO CREATE COMBINATION INDEX ARRAY
    //CODE TO GENERATE COMBINATION ARRAY INDEXES
    for (let i = 0; i < string.length; i++) {
        tmpArr2.push(i);
        tmpArr1.push(tmpArr2);
        combinationIndexArr.push(tmpArr2);
        for (let j = 0; j < tmpArr1.length; j++) {
            tmpArr2 = [];
            let a = Math.max.apply(null, tmpArr1[j]);
            let difference = strLength - a;
            for (let l = 0; l < difference; l++) {
                tmpArr2 = [];
                for (let k = 0; k < tmpArr1[j].length; k++) tmpArr2.push(tmpArr1[j][k]);
                a++;
                tmpArr2.push(a);
                tmpArr1.push(tmpArr2);
                combinationIndexArr.push(tmpArr2);
            }
        }
        tmpArr1 = [];
        tmpArr2 = [];
    }
    return combinationIndexArr;
}

//FUNCTION TWO WHICH RETURN ACTUAL STRING VALUES COMBINATION ARRAY
function combinationValues(combinationIndexArr, str) {
    let string = str;
    let combinationValueArr = [];
    for (let y = 0; y < combinationIndexArr.length; y++) {
        let fStr = "";
        for (let n = 0; n < combinationIndexArr[y].length; n++) {
            if (n !== combinationIndexArr[y].length - 1)
                fStr += string[combinationIndexArr[y][n]] + ", ";
            else fStr += string[combinationIndexArr[y][n]];
        }
        combinationValueArr.push(fStr);
    }
    return combinationValueArr;
}

function SumMultiplier(arr) {
    let doubleArrSum = 0;
    for (let i = 0; i < arr.length; i++) doubleArrSum += arr[i];
    doubleArrSum *= 2;
    //FUNCTION CALL ONE
    let combinationIndexArr = combinationIndexes(arr);
    //FUNCTION CALL TWO
    let combinationValueArr = combinationValues(combinationIndexArr, arr);
    for (let i = 0; i < combinationValueArr.length; i++) {
        let tmp = combinationValueArr[i].split(",");
        if (tmp.length == 2) if (tmp[0] * tmp[1] > doubleArrSum) return true;
    }
    return false;
}
// const arr = [2, 2, 2, 2, 4, 1];
const arr = [1, 1, 2, 10, 3, 1, 12];
// KEEP THIS FUNCTION CALL HERE
console.log(SumMultiplier(arr));