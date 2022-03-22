/* var lowestCommonAncestor = function (root, p, q) {
    let stack = [root];
    let hash = new Map();

    while (stack.length) {
        let node = stack.pop();

        if (node.right) {
            hash.set(node.right, node);
            stack.push(node.right);
        }

        if (node.left) {
            hash.set(node.left, node);
            stack.push(node.left);
        }
    }


    let path1 = [q];
    let path2 = [p];

    while (path1[path1.length - 1] !== root) {
        path1.push(hash.get(path1[path1.length - 1]));
    }

    while (path2[path2.length - 1] !== root) {
        path2.push(hash.get(path2[path2.length - 1]));
    }

    for (let i = 0; i < path1.length; i++) {
        let node = path1[i];
        if (path2.indexOf(node) !== -1) {
            console.log(node);
            return node;
        }
    }
} */

const paths = (n) =>
    [n, ...(n > 0 ? paths((n - 1) >> 1) : [])]

const intSec = (a, b) =>
    a.filter(x => b.includes(x))

const lowestCommonAncestor = (strArr) =>
    console.log(strArr[0]);
// start[Math.max(...intSec(paths(start.indexOf(p)), paths(start.indexOf(q))))]



const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];

// strArr.map(bs => console.log(bs));

const root = [10, 5, 1, 7, 40, 50];
const p = 5;
const q = 10;

const root1 = [3, 2, 1, 12, 4, 5, 13];
const p1 = 5;
const q1 = 13;

// lowestCommonAncestor(root, p, q);
lowestCommonAncestor(strArr);
// console.log(lowestCommonAncestor(root, p, q));
// console.log(lowestCommonAncestor(root1, p1, q1));