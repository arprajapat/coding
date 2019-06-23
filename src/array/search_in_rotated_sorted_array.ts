/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

 */

const main = (arr: number[], target: number) => {
    const len = arr.length;
    return search(arr, target, 0, len-1);
}

const search = (arr: number[], target: number, start: number, end: number) => {
    if(start>end) return -1;

    const mid = Math.floor((start+end)/2);
    if(arr[mid]===target)
        return mid;
    else if(arr[start] <= target && target < arr[mid]) {
        return search(arr, target, start, mid-1);
    }
    else {
        return search(arr, target, mid+1, end);
    } 
}

console.log(main([4,5,6,7,0,1,2], 3))
console.log(main([4,5,6,7,0,1,2], 0))