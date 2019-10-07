function treeSum(root) {
    if (!root) return 0;
    let queue = [root];
    let sum = 0

    while (queue.length) {
        let node = queue.pop();
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)

        sum += node.val
    }

    return sum;
}


module.exports = {
    treeSum
};