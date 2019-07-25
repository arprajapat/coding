import { TreeNode } from '../DataType/TreeNode'

const path = (root: TreeNode<number>, node: number, stack: string[]) => {
    if(root == null) return false;
    
    if(root.val == node) {
        return true;
    }
    if(path(root.left, node, stack)) {
        stack.push('L')
        return true;
    }
    if(path(root.right, node, stack)) {
        stack.push('R')
        return true;
    }
    return false;
}

const main = (root: TreeNode<number>, node: number) => {
    const s: string[] = [];
    path(sample, 0, s);
    console.log(s);

    const Count = {max : s.length};
    rec(root, s, s.length, Count);
    console.log(Count.max);
    return Count.max
}

const rec = (root: TreeNode<number>, stack: string[], dist: number, Count: {max: number}) => {
    if(root == null) return;
    if(dist> Count.max)  Count.max = dist;
    if(stack.length) {
        const pop = stack.pop();
        if(pop == 'L') {
            rec(root.left, stack, dist-1, Count);
            rec(root.right, [], dist+1, Count);
        }
        else {
            rec(root.right, stack, dist-1, Count);
            rec(root.left, [], dist+1, Count);
        }
    }
    else {
        rec(root.left, stack, dist+1, Count);
        rec(root.right, stack, dist+1, Count);
    }
}

const sample = (() => {
    const root = new TreeNode(1);

    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    root.right.left.left = new TreeNode(8);
    root.right.left.left.left = new TreeNode(0);
    return root;
})();

main(sample, 0);