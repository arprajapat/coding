export const main = (arr: number[]) => {
    if(arr.length <= 1) return;
    quickSort(arr, 0, arr.length-1);
}

const quickSort  = (arr: number[], lo: number, hi: number) => {
    if(lo < hi) {
        const pivot = partition(arr, lo, hi);
        
        quickSort(arr, lo, pivot-1);
        quickSort(arr, pivot+1, hi);
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

// const a = [8,4,5,0,3,5,2];
// main(a);
// console.log(a);
const n = 100;
const b = new Array(n).fill(0).map(()=> Math.floor(Math.random()*n))

console.log(b);
main(b);
console.log(b);

