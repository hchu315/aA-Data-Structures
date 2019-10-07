function treeHeight(root) {
    if (!root) return -1;
    let height = 0;

    function recursiveDepth(root) {
        if (!root) return -1;

        let left = recursiveDepth(root.left) + 1
        let right = recursiveDepth(root.right) + 1

        return height + Math.max(left, right)
    }

    return recursiveDepth(root);
}


module.exports = {
    treeHeight
};