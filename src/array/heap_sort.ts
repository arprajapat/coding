export const main = (arr: number[]): void => {
    heapSort(arr) 
}

const heapSort = (arr: number[]) => {
    console.log('Input Array ', arr);
    const n = arr.length;
    // max Heap building
    const start = Math.floor(n/2)-1
    for (let i = start; i >= 0; i--) {
        heapify(arr, i, n)
    }
    console.log('Max Heap    ', arr);
    // heap sort
    let i = arr.length-1;
    while(i>=0) {
        swap(arr, 0, i);
        heapify(arr, 0, i)
        i--;
    }
    console.log('Sorted Array', arr, '\n');
    
}

const heapify = (arr: number[], i: number, n: number) => {
    const l = 2*i+1;
    const r = 2*i+2;
    let largest = i;

    if(l<n && arr[l] > arr[largest]) {
        largest = l;
    }

    if(r<n && arr[r] > arr[largest]) {
        largest = r;
    }

    if(largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, n)
    }
}

const swap = (arr: number[], i: number, j: number): void => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

main([1, 12, 9,5,6,10])
main([6,4,3,2,1,0])