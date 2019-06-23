/**
 * 
 * binary search in a sorted array 
 * time complexity O(log(n));
 */

export const main = (arr: number[], target: number) => {
    const len = arr.length;
    return binarySearch(arr, target, 0, len-1);
}

const binarySearch = (arr: number[], target: number, start: number, end: number) => {
    if(start > end) return -1;

    const mid = Math.floor((start+end)/2);

    if(arr[mid]=== target) 
        return mid;
    else if(arr[mid] > target) 
        return binarySearch(arr, target, start, mid-1);
    else 
        return binarySearch(arr, target, mid+1, end);
}
