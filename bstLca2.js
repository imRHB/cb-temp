const paths = (n) =>
    [n, ...(n > 0 ? paths((n - 1) >> 1) : [])]

const intersection = (xs, ys) =>
    xs.filter(x => ys.includes(x))

const lowestCommonAncestor = (strArr) => {
    let xs = strArr[0];
    let p = strArr[1];
    let q = strArr[2];
    // console.log(xs, p, q);
    const result = xs[Math.max(...intersection(paths(xs.indexOf(p)), paths(xs.indexOf(q))))];
    console.log(result);
}


const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
// console.log(strArr[2]);

// console.log(lowestCommonAncestor(strArr[0], strArr[1], strArr[2]));
// console.log(lowestCommonAncestor(strArr));
// const result = lowestCommonAncestor(["[10, 5, 1, 7, 40, 50]", "5", "10"]);
// console.log(result);
lowestCommonAncestor(strArr);