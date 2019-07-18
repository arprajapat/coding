export const main = (arr: number[], k: number) => {
    if(k > arr.length) return -1;
    k--;
    return quickSort(arr, 0, arr.length-1, k);
}

const quickSort  = (arr: number[], lo: number, hi: number, k: number) => {
    if(lo <= hi) {
        const pivot = partition(arr, lo, hi);
        if(pivot == k) return arr[k];
        
        if(k<pivot) 
            return quickSort(arr, lo, pivot-1, k);
        else
            return quickSort(arr, pivot+1, hi, k);
    }
}

const partition = (arr: number[], lo: number, hi: number): number => {
    let i = lo;
    const pivot = arr[hi];
    for (let j = lo; j < hi; j++) {
        if(arr[j]< pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, hi);
    return i;
}

const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// const n = 100;
// const b = new Array(n).fill(0).map(()=> Math.floor(Math.random()*n))
// const k = Math.floor(Math.random()*n)
// console.log(b);
// console.log(`${k}th element = ${main(b, k)}`);


