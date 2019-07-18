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

/**
 * Contraint : all number should be unique
 * @param arr 
 */
export const main = (arr: number[]) => {
    const len = arr.length;
    const rotationCount = iterative(arr);
    console.log(`rec => ${rotatedIndex(arr, 0, len-1)}, itr => ${rotationCount}`);
    return rotationCount;
    
}

const rotatedIndex = (arr: number[], start: number, end: number) => {
    if(start>end) return -1;
    if(start == end) {
        return start;
    }

    const mid = Math.floor((start+end)/2);
    if(arr[end] < arr[mid]) {
        return rotatedIndex(arr, mid+1, end);
    }
    else {
        return rotatedIndex(arr, start, mid);
    }
}

const iterative = (arr: number[]) => {
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

main([]); // empty array
main([1,2,3,4,5,6,7])
main([7,1,2,3,4,5,6])
main([6,7,1,2,3,4,5])
main([5,6,7,1,2,3,4])
main([4,5,6,7,1,2,3])
main([3,4,5,6,7,1,2])
main([2,3,4,5,6,7,1])
// Binary solution not possible if array has duplicates
// counter example. answer can be wrong 
main([1,1,1,1,1,5,1,1]);