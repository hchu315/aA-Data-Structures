function breadthFirstArray(root) {
    let arr = [];
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();

        arr.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)

    }
    
    return arr;
}

module.exports = {
    breadthFirstArray
};