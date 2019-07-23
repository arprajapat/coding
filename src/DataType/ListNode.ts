export class ListNode <T>{
    public readonly val: T;
    public next: ListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export class DoubleListNode <T>{
    public readonly val: T;
    public next: DoubleListNode<T>;
    public prev: DoubleListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
