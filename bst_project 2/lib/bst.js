class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }

    insert(val, root = this.root) {
        let node = new TreeNode(val);
        if (!root) {
            this.root = node;
            return;
        }

        if (root.val > val) {
            if (!root.left) {
                root.left = node
            } else {
                return this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                return this.insert(val, root.right)
            }
        }
    }

    searchRecur(target, root = this.root) {
        if (!root) return false;

        if (root.val > target) {
            return this.searchRecur(target, root.left)
        } else if (root.val < target) {
            return this.searchRecur(target, root.right)
        } else {
            return true
        }
    }

    searchIter(target) {
        if (!this.root) return false;
        let stack = [this.root];

        while (stack.length) {
            let node = stack.pop();
            if (node.val == target) {
                return true;
            } else if (node.val > target) {
                if (!node.left) {
                    return false;
                } else {
                    stack.push(node.left);
                }
            } else {
                if (!node.right) {
                    return false;
                } else {
                    stack.push(node.right);
                }
            }
        }
    }
}

module.exports = {
    TreeNode,
    BST
};