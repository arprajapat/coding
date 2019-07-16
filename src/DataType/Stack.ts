export class Stack<T> {
    private _stack: T[] = [];
    private _size = -1;

    push (val: T): T {
        this._size++;
        this._stack.push(val);
        return val;
    }
    pop (): T | undefined {
        if(this._size>-1) {
            const topEle = this.peek();
            this._stack.pop();
            this._size--;
            return topEle;
        }
        throw new Error('EmptyStackException');
    }
    peek (): T | undefined {
        if(this._size > -1)
            return this._stack[this._size];
        else
            return undefined;
    }
    empty (): boolean {
        return this._size === -1;
    }
    search (val: T): number {
        for(let i = 0; i < this._size; i++) {
            if(this._stack[i] === val) {
                return (this._size-i);
            }
        }
        return -1;
    }
}