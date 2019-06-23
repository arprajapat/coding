/**
 * 
 * Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.

Examples:

Input : arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation : Initial array must be {2, 3,
6, 12, 15, 18}. We get the given array after 
rotating the initial array twice.

Input : arr[] = {7, 9, 11, 12, 5}
Output: 4

Input: arr[] = {7, 9, 11, 12, 15};
Output: 0
 */

export const main = (arr: number[]) => {
    const len = arr.length;
    console.log(rotatedIndex(arr, 0, len-1));
}

const rotatedIndex = (arr: number[], start: number, end: number) => {
    const mid = Math.floor((start+end)/2);

    if((mid-1 >= 0 && arr[mid] < arr[mid-1]) || (mid == 0)) {
        return mid;
    }
    else if(arr[end] < arr[start]) {
        return rotatedIndex(arr, mid+1, end);
    }
    else {
        return rotatedIndex(arr, start, mid-1);
    }
}

main([7, 9, 11, 0, 5])
main([7, 9, 11, 12, 15])