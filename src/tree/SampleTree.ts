import { TreeNode } from "./TreeNode";



export const sample1 = (() => {
    const root = new TreeNode(20);
    root.right = new TreeNode(22);
    root.right.right = new TreeNode(25);
    root.left = new TreeNode(8);
    root.left.right = new TreeNode(12);
    root.left.right.right = new TreeNode(14);
    root.left.right.left = new TreeNode(10);
    root.left.right.left.left = new TreeNode(11);
    root.left.left = new TreeNode(4);
    return root;
})();
