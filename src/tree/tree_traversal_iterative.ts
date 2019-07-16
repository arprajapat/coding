import { TreeNode } from '../DataType/TreeNode';
import { Stack } from '../DataType/Stack';
// https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45621/Preorder-Inorder-and-Postorder-Traversal-Iterative-Java-Solution

export const main = (root: TreeNode<number>) => {
    const pre_order: number[] = [];
    const in_order: number[] = [];
    const post_order: number[] = [];
    preorder(root, pre_order);
    inorder(root, in_order);
    postorder(root, post_order);
    return {
        preorder: pre_order,
        inorder: in_order,
        postorder: post_order,
    }
}
const preorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    const stack = new Stack<TreeNode<number>>();
    stack.push(root);
    while(!stack.empty()) {
        const pop = stack.pop();
        arr.push(pop.val);
        if(pop.right) stack.push(pop.right);
        if(pop.left) stack.push(pop.left);
    }
}

const inorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    const stack = new Stack<TreeNode<number>>();
    while(root) {
        stack.push(root);
        root = root.left
    }
    while(!stack.empty()) {
        const pop = stack.pop();
        arr.push(pop.val);
        let temp = pop.right;
        while(temp) {
            stack.push(temp);
            temp = temp.left;
        } 
    }
}
export const postorder = (root: TreeNode<number>, arr: number[]) => {
    if(root == null) {
        return 
    }
    const stack = new Stack<TreeNode<number>>();
    stack.push(root);
    while(!stack.empty()) {
        const pop = stack.pop();
        arr.push(pop.val);
        if(pop.left) stack.push(pop.left);
        if(pop.right) stack.push(pop.right);
    }
    arr.reverse();
}
