import { TreeNode } from './TreeNode';

export const main = (root: TreeNode<number>) => {
    const pre_order: number[] = [];
    const in_order: number[] = [];
    const post_order: number[] = [];
    preorder(root, pre_order);
    inorder(root, in_order);
    postorder(root, post_order);
    return {
        preorder: pre_order,
        in_order: in_order,
        postorder: post_order,
    }
}

/**
 * @param root 
 * @param arr 
 */
const preorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
}

/**
 * @param root 
 * @param arr 
 */
export const inorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}

/**
 * @param root 
 * @param arr 
 */
export const postorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);
}
