let lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return console.log(lowestCommonAncestor(root.left, p, q));
    }
    else if (root.val < p.val && root.val < q.val) {
        return console.log(lowestCommonAncestor(root.right, p, q));
    }
    else {
        return console.log(root);
    }
}

const strArr = ["[10, 5, 1, 7, 40, 50]", "5", "10"];

// console.log(lowestCommonAncestor("[10, 5, 1, 7, 40, 50]", "5", "10"))
lowestCommonAncestor(["[10, 5, 1, 7, 40, 50]", "5", "10"])