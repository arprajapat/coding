import { DoubleList } from "./DoubleList";
import { DoubleListNode } from "./ListNode";

export class LRU<K,V> {
    private _map: Map<K, DoubleListNode<V>> =  null;
    private _MAX_SIZE: number;
    private _list: DoubleList<V>

    constructor(capacity: number) {
        if(capacity<1) throw new Error("InsufficentCapacity")
        this._map = new Map<K, DoubleListNode<V>>();
        this._MAX_SIZE = capacity;
        this._list = new DoubleList<V>();
    }
    put(key: K, value: V): void {
        if(this._map.has(key)) {
            const oldNode = this._map.get(key);
            this._list.delete(oldNode);
            const node = this._list.addfirst(value);
            this._map.set(key, node);
        }
        else {
            if(this._list.getSize() >= this._MAX_SIZE) {
                this._list.deleteLast();
            }
            const node = this._list.addfirst(value);
            this._map.set(key, node);
        }
    }

    get (key: K): V {
        if(this._map.has(key)) {
            const oldNode = this._map.get(key);
            this._list.delete(oldNode);

            const node = this._list.addfirst(oldNode.val);
            this._map.set(key, node);
            console.log(oldNode.val);
            return oldNode.val;
        }
        return null;
    }
    size(): void {
        console.log(this._list.getSize())
    }
    print() {
        this._list.printList()
    }
}

// const lru = new LRU<string, number>(0);
// lru.put('1', 1);
// lru.put('2', 2);
// lru.put('3', 3);
// lru.get('1');
// lru.put('4', 4);
// lru.size();
// lru.print();