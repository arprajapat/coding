import { TreeNode } from "../DataType/TreeNode";

export const main = <T>(root: TreeNode<T>, p: TreeNode<T>, q: TreeNode<T>): TreeNode<T> => {
    return lowestCommonAncestor(root, p, q);
}

const lowestCommonAncestor = <T>(root: TreeNode<T>, p: TreeNode<T>, q: TreeNode<T>): TreeNode<T> => {
    if(root == null || root == p || root == q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return left ? left: right;
}