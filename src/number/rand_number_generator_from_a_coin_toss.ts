/**
 * https://stackoverflow.com/questions/13209162/creating-a-random-number-generator-from-a-coin-toss
 * Given a function f() = 0 or 1 with a perfect 1:1 distribution, 
 * create a function f(n) = 0, 1, 2, ..., n-1 each with probability 1/n
 */

const flipCoin = () => {
    return Math.floor(Math.random()+.5)
}

/**
 * generate random  interger number from [0, n-1] with probabilty 1/n;
 * @param n 
 */
export const main = (n: number) => {
    if(n < 1) throw new Error('Invalid Range');
    if(n==1) return 0;
    let k = 0;
    let m = 1;
    while(n>m) {
        m *= 2;
        k = k+1;
    }
    // console.log((m-n)/m)
    let res = 0
    m = 1;
    do {
        const rand = flipCoin();
        // console.log("rand",rand,m)
        if(m*rand+res < n) {
            res = m*rand + res;
            m *= 2;
            k--;
        }
    } while (k>0);
    
    return res;
}

console.time('START');
for (let i = 0; i < 10; i++) {
    console.log(main(5));
}
console.timeEnd('START')