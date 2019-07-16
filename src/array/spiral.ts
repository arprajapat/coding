/**
 * Simpler solution 
 * https://leetcode.com/problems/spiral-matrix/discuss/20599/Super-Simple-and-Easy-to-Understand-Solution
 * 
 */
export const  main = (arr: number[][]) => {
    // assuming arr is 2D;
    let c = 0;
    let m = arr.length;
    let n = arr[0].length;
    let loopCount = Math.floor((Math.min(m, n)+1)/2);
    const out = [];
    // log(loopCount);
    while(loopCount>0) {
        let flag;
        let i = c;
        let j = c;
        for( ;j < n-c; j++) {
            out.push(arr[i][j]);
            flag = 'L2R';
        }
        j = n-1-c;
        i = i+1;
        if(flag == 'L2R') {
            for(; i < m-c; i++) {
                out.push(arr[i][j]);
                flag = 'T2B';
            }
        }

        j = j-1;
        i = m-1-c;
        if(flag == 'T2B') {
            for(; j >= c; j--) {
                out.push(arr[i][j]);
                flag = 'R2L';
            }
        }

        j = c;
        i = i-1;
        if(flag == 'R2L') {
            for(; i >= c+1; i--) {
                out.push(arr[i][j]);
                flag = 'B2T';
            }
        }
        loopCount--;
        c++;
    }
    log(out);
}



const log = console.log;

const sample = [];
sample.push([1,2,3,4])
main(sample);

sample.push([5,6,7,8])
main(sample);


sample.push([9,10,11,12])
main(sample);

sample.push([13,14,15,16])
main(sample);

main([[1]]);