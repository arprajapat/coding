/**
Input:
Array of length n
Integer m such that 0 < m <= n

Output:
m uniformly random integers from the array such that indexes do not repeat

Example:
Array - 1 1 0
m     - 2

- 1 0
- 0 1
- 1 1
- 0 0 is not possible
 */
const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max); 
} 

export const main = (arr: number[], m: number): void => {
    let len = arr.length-1;
    const randArr: number[] = []
    for(let i=0; i<m; i++) {
        const index = getRandomNumber(len);
        randArr.push(arr[index]);
        swap(arr, index, len);

        len--;
    }
    console.log(`input:- ${arr}\noutput:- ${randArr}`);
    // console.log('output:-', randArr);
 }

 const swap = (arr: number[], m: number, n: number): void => {
    const temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
 }