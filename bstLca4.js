function lowestCommonAncestor(root, p, q) {
    const low = Math.min(p.val, q.val)
    const high = Math.max(p.val, q.val)
    let ancestor = null
    const aux = (node) => {
        if (!node) {
            return
        }
        if (node.val >= low && node.val <= high) {
            ancestor = node
        } else if (node.val <= low) {
            aux(node.right)
        } else {
            aux(node.left)
        }
    }
    aux(root)
    return ancestor
}

const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
const root = [10, 5, 1, 7, 40, 50];
const p = 5;
const q = 10;

const root1 = [3, 2, 1, 12, 4, 5, 13];
const p1 = 5;
const q1 = 13;

console.log(lowestCommonAncestor(root1, p1, q1));

/* const lowestCommonAncestor = function (root, p, q) {
    const low = Math.min(p.val, q.val)
    const high = Math.max(p.val, q.val)
    let ancestor = null
    const aux = (node) => {
        if (!node) {
            return
        }
        if (node.val >= low && node.val <= high) {
            ancestor = node
        } else if (node.val <= low) {
            aux(node.right)
        } else {
            aux(node.left)
        }
    }
    aux(root)
    return ancestor
}

const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
const root = [10, 5, 1, 7, 40, 50];
const p = 5;
const q = 10; */
