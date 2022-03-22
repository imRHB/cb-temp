function lowestCommonAncestor(strArr) {
    let root = parseInt(strArr[0]);
    let p = parseInt(strArr[1]);
    let q = parseInt(strArr[2]);
    const map = {}
    const aux = (node, prev) => {
        if (node) {
            map[node.val] = prev
            aux(node.left, node)
            aux(node.right, node)
        }
    }
    aux(root)
    const prnts = {}
    let prnt = p
    while (prnt) {
        prnts[prnt.val] = prnt
        prnt = map[prnt.val]
    }
    prnt = q
    while (prnt) {
        if (prnts[prnt.val]) {
            return prnt
        }
        prnt = map[prnt.val]
    }
    return null
}

const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
const root = [10, 5, 1, 7, 40, 50];
const p = 5;
const q = 10;

const strArr2 = ["[3, 2, 1, 12, 4, 5, 13]", "5", "13"]
const root1 = [3, 2, 1, 12, 4, 5, 13];
const p1 = 5;
const q1 = 13;

const root2 = [10, 5, 1, 7, 40, 50];
const p2 = 1;
const q2 = 7;

// console.log(lowestCommonAncestor(root1, p1, q1));
// console.log(lowestCommonAncestor(root, p, q));
// console.log(lowestCommonAncestor(root2, p2, q2));

console.log(lowestCommonAncestor(strArr));