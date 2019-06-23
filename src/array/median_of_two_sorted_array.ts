export const main = (arr1: number[], arr2: number[]) => {
    const m = arr1.length;
    const n = arr2.length;
 
    if((m+n) % 2) { // sum is odd then middle element is median;
        const mi = (m+n-1)/2;
        let median = findElement(arr1, arr2, 0, m-1, mi);
        if(median === -1) {
            median = findElement(arr2, arr1, 0, n-1,mi);
        }
        console.log(median);
        return median;
    }
    else { //sum: even => avg of middle two elements is median
        const mi = (m+n)/2;
        let median1 = findElement(arr1, arr2, 0, m-1, mi);
        if(median1 === -1) {
            median1 = findElement(arr2, arr1, 0, n-1,mi);
        }

        let median2 = findElement(arr1, arr2, 0, m-1, mi-1);
        if(median2 === -1) {
            median2 = findElement(arr2, arr1, 0, n-1,mi-1);
        }
        console.log(median1, median2);
        return (median1+median2)/2;
    }
}

const findElement = (a: number[], b: number[], start:number, end: number, index: number) => {
    // base case;
    if(start>end) {
        return -1;
    }
    const mid = Math.floor((start+end)/2);
    const pos = findPositionRange(b, a[mid], 0, b.length-1);
    if(pos[0] <= index-mid && pos[1] >= index-mid) {
        return a[mid];
    }
    else if(pos[1]+mid < index) {
        return findElement(a, b, mid+1, end, index);
    }
    else {
        return findElement(a, b, start, mid-1, index);
    }
}
const findPositionRange = (arr: number[], target:number, start: number, end: number) => {
    return [
        findPosition(arr, target, start, end, true),
        findPosition(arr, target, start, end),
    ]
}
const findPosition = (arr: number[], target:number, start: number, end: number, isFirst?:boolean) => {
    const mid = Math.floor((start+end)/2);
    if(isFirst) {
        if(arr[start] >= target) {
            return start;
        }
        else if(arr[end]< target) {
            return end+1;
        }
        else if(arr[mid] >= target){
            return findPosition(arr, target, start, mid-1, isFirst);
        }
        else {
            return findPosition(arr, target, mid+1, end, isFirst);
        }
    }
    else {
        if(arr[start] > target) {
            return start;
        }
        else if(arr[end]<= target) {
            return end+1;
        }
        else if(arr[mid] > target){
            return findPosition(arr, target, start, mid-1);
        }
        else {
            return findPosition(arr, target, mid+1, end);
        }
    }
}


// console.log(findPosition([1,5,8,9,11], 1, 0, 4));
main([1,4,6,8,10], [2,5,7,9, 11]);
main([1,2,4,6,8], [1,5,6,8,10,11])

// console.log(findPositionRange([1,1,5,9,11], 10, 0, 4));