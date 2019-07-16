export class TreeNode <T>{
    public readonly val: T;
    public left: TreeNode<T>;
    public right: TreeNode<T>;

    constructor(val: T) {
        this.val = val;
        this.left = this.right = null;
    }
}

