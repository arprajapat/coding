export const main = (arr1: number[], arr2: number[]) => {
    if(arr1.length==0) {
        return median(arr2);
    }
    if(arr2.length==0) {
        return median(arr1);
    }
    const n1 = arr1.length;
    const n2 = arr2.length;
    const n = n1+n2;
    
    if((n1+n2) % 2 == 1) {
        const idx = Math.floor(n/2);
        return findElement(arr1, arr2,idx)
    }
    else {
        const idx = Math.floor(n/2);
        return (findElement(arr1, arr2,idx)+findElement(arr1, arr2,idx-1))/2
    }
    
};

const findElement = (arr1: number[], arr2: number[], idx: number) => {
    const n1 = arr1.length;
    const n2 = arr2.length;
    let start = 0;
    let end  = n1-1;
    while(start<=end) {
        const mid = Math.floor((start+end)/2);
        const l = binarysearchL(arr2, 0, arr2.length-1, arr1[mid]);
        const r = binarysearchR(arr2, 0, arr2.length-1, arr1[mid])
        if(idx <= mid+r && idx >= mid+l) return arr1[mid];
        else if(idx < mid+l) end = mid-1;
        else start = mid+1;
    }
    
    start = 0;
    end  = n2-1;
    while(start<=end) {
        const mid = Math.floor((start+end)/2);
        const l = binarysearchL(arr1, 0, arr1.length-1, arr2[mid]);
        const r = binarysearchR(arr1, 0, arr1.length-1, arr2[mid])
        if(idx <= mid+r && idx >= mid+l) return arr2[mid];
        else if(idx < mid+l) end = mid-1;
        else start = mid+1;
    }
}

const median = (arr: number[]) => {
    const n = arr.length;
    if(n%2 == 1) {
        return arr[Math.floor(n/2)]
    }
    else {
        return (arr[n/2]+arr[(n-2)/2])/2
    }
}

const binarysearchL = (arr: number[], start: number, end: number, target: number) => {
    if(start > end) return end+1;
    // if(start > end) return start;
    const mid = Math.floor((start+end)/2);

    if(arr[mid] < target)
    // if(arr[mid] <= target)
        return binarysearchL(arr,mid+1, end, target);
    else 
        return binarysearchL(arr,start, mid-1, target);
}

const binarysearchR = (arr: number[], start: number, end: number, target: number) => {
    // if(start > end) return end+1;
    if(start > end) return start;
    const mid = Math.floor((start+end)/2);

    // if(arr[mid] < target)
    if(arr[mid] <= target)
        return binarysearchR(arr,mid+1, end, target);
    else 
        return binarysearchR(arr,start, mid-1, target);
}