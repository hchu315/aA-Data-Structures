function depthFirstSearch(root, targetVal) {
    // function depthRecursive(root, targetVal) {
    // if (!root) return;
    let nodeRight, nodeLeft;

    if (root.val == targetVal) return root;
    if (root.left)  nodeLeft = depthFirstSearch(root.left, targetVal)
    if (root.right) nodeRight =  depthFirstSearch(root.right, targetVal)

    return nodeLeft || nodeRight || null;
    // }
    // let stack = [root];

    // while (stack.length) {
    //     let node = stack.pop();

    //     if (node.val == targetVal) return node;
    //     if (node.right) stack.push(node.right);
    //     if (node.left) stack.push(node.left);
    // }

    // return null;
}


module.exports = {
    depthFirstSearch
};