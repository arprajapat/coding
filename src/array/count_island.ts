export const main = (arr: number[][]) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if(arr[i][j]) {
                markVisited(arr, i, j);
                count++;
            }
        }
    }
    console.log(count);
    
}

const markVisited = (arr: number[][], i: number, j: number) => {

    if(i<0 || i >=arr.length || j<0 || j>= arr[0].length || arr[i][j]==0) return;

    arr[i][j] = 0;
    markVisited(arr, i, j+1);
    markVisited(arr, i+1, j);
    markVisited(arr, i, j-1);
    markVisited(arr, i-1, j);
}

const grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]
const grid2 = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]

main(grid)
main(grid2)
