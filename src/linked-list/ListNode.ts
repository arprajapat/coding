export class ListNode <T>{
    public readonly val: T;
    public next: ListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}
