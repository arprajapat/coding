/**
 * Company : google
 * Source : leetcode
 * Given an array nums of length n. All elements appear in pairs except one of them. Find this single element that appears alone.
Pairs of the same element cannot be adjacent:

[2, 2, 1, 2, 2] // ok
[2, 2, 2, 2, 1] // not allowed

Example 1:

Input: [2, 2, 1, 1, 9, 9, 5, 2, 2]
Output: 5

Example 2:

Input: [1, 1, 2]
Output: 2

Example 3:

Input: [3, 3, 2, 3, 3]
Output: 2
 */

export const main = (arr: number[]): number => {
    let lo = 0;
    let hi = arr.length-1;
    while(lo < hi) {
        const mid = Math.floor((lo+hi)/2);
        if(mid%2==0) {
            if(mid+1 <= hi && arr[mid+1]== arr[mid]) {
                lo = mid+2;
            }
            else {
                hi = mid;
            }
        }
        else {
            if(mid-1 >= lo && arr[mid-1]== arr[mid]) {
                lo = mid+1;
            }
            else {
                hi = mid-1;
            }
        }
    }
    console.log(arr[lo]);
    return arr[lo];
}

main([2, 2, 1])
main([2, 1, 1])
main([2, 2, 1, 1, 3])
main([2, 2, 3, 1, 1])
main([3, 2, 2, 1, 1])
main([2, 2, 1, 1, 9, 9, 5, 2, 2])
main([0, 2, 2, 1, 1, 7, 7, 9, 9])
main([2, 2, 0, 1, 1, 7, 7, 9, 9])
main([2, 2, 1, 1, 0, 7, 7, 9, 9])
main([2, 2, 1, 1, 7, 7, 0, 9, 9])
main([2, 2, 1, 1, 7, 7, 9, 9, 0])
