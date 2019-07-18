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

export const main = (arr: number[], target: number) => {
    const len = arr.length;
    const rotatedIndex = findRotation(arr)

    if(rotatedIndex == 0 || (target >= arr[rotatedIndex] && target <= arr[len-1])) {
        return binarySearch(arr, target, rotatedIndex, len-1); 
    }
    else {
        return binarySearch(arr, target, 0, rotatedIndex-1); 
    }
}

const binarySearch = (arr: number[], target: number, start: number, end: number) => {
    if(start>end) return -1;

    const mid = Math.floor((start+end)/2);
    if(arr[mid] == target)
        return mid;
    if(target > arr[mid]) {
        return binarySearch(arr, target, mid+1, end);
    }
    else {
        return binarySearch(arr, target, start, mid-1);
    }
}

const findRotation = (arr: number[]) => {
    if(arr.length == 0) return -1
    let start = 0;
    let end = arr.length-1;
    while(start<end) {
        const mid = Math.floor((start+end)/2);
        if(arr[mid]>arr[end]) {
            start = mid+1;
        }
        else {
            end = mid;
        }
    }
    return start;
}

console.log(main([4,5,6,7,0,1,2], 4))
console.log(main([4,5,6,7,0,1,2], 0))
console.log(main([5,1,3], 5))
console.log(main([6,7,1,2,3,4,5], 6))