export const main = (w: number[], p: number[], cap: number) => {
    return knapsack2DArray(w,p,cap);
}
const knapsack2DArray = (w: number[], p: number[], cap: number) => {
    const n = w.length;
    const arr: number[][] = new Array(n+1).fill(0).map(() => new Array(cap+1).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= cap ; j++) {
            if(j-w[i]>=0) {
                arr[i+1][j] = Math.max(arr[i][j], arr[i][j-w[i]]+p[i])
            } 
            else {
                arr[i+1][j] = arr[i][j];
            }
        }
        // console.log(arr);
        
    }
    console.log('---knapsack2DArray---');
    console.log(arr);
    return arr[n][cap]
}
export const knapsack1DArray = (w: number[], p: number[], cap: number) => {
    const n = w.length;
    const arr: number[] = new Array(cap+1).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = cap; j >= w[i] ; j--) {
            arr[j] = Math.max(arr[j], arr[j-w[i]]+p[i])
        }
        // console.log(arr);
    }
    console.log('---knapsack1DArray---');
    console.log(arr);
    return arr[cap]
}

main([2,3,1,4],
    [4,5,3,7],
    5)
// feel free to add test cases