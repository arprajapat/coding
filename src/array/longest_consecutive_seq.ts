/**
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

export const main = (arr: number[]) => {
    const len = arr.length;
    const map = new Map<number, number>();
    for(let i = 0; i < len; i++) {
        const key = arr[i];
        if(map.has(key)) {
            continue;
        }
        const left = map.has(key-1) ? map.get(key-1) : 0;
        const right = map.has(key+1) ? map.get(key+1) : 0;
        map.set(key, left+right+1);
        if(map.has(key-1)) {
            map.set(key-left, left+right+1);
        }
        if(map.has(key+1)) {
            map.set(key+right, left+right+1);
        }
    }
    let max  = 0;
    map.forEach((value, key) => {
        max = Math.max(max, value);
    });
    console.log(max);
    return max;
}

main([100, 4, 200, 1, 3, 2])
main([1,2,0,1])