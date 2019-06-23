export const main = (arr: number[]) => {
    const len = arr.length;
    divide(arr, 0, len-1);
    return arr;
}

const divide = (arr: number[], start: number, end: number): void => {
    if(start >= end)
        return;
    const mid = Math.floor((start+end)/2);
    divide(arr, start, mid);
    divide(arr, mid+1, end);
    merge(arr, start, mid, end);
    return;
}

const merge = (arr: number[], start: number, mid: number, end: number): void => {
    // get sort array from {start,mid} and {mid+1, end};
    let i = start;
    let j = mid+1;
    let sorted: number[] = [];
    while(i <= mid || j <= end) {
        if(arr[i] <= arr[j] && i <= mid) {
            sorted.push(arr[i]);
            i++;
        }
        else if(arr[j] <= arr[i] && j <= end) {
            sorted.push(arr[j]);
            j++;
        }
        else if(i <= mid) {
            sorted.push(arr[i]);
            i++;
        }
        else {
            sorted.push(arr[j]);
            j++;
        }
    }
    const len = sorted.length;
    for(let i=0; i < len; i++) {
        arr[start+i] = sorted[i];
    }
    return;
}
