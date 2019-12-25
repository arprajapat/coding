/**
 * Ugly numbers are numbers whose only prime factors are 2 or 11.
 * The sequence 1,2,4,8,11,16,22,32,44, … are first few ugly numbers.
 * Given a number n, find the n’th Ugly number.
 */

export const main = (n: number) => {
    if(n<1) return -1;
    if(n==1 ) return 1;
    const temp = [1];
    let i2 = 0;
    let i11 = 0;
    for(let i=1;i<n;i++) {
        const next2 = temp[i2]*2;
        const next11 = temp[i11]*11;
        
        if(next2 > next11) {
            temp.push(next11);
            i11++;
        }
        else if(next2 < next11) {
            temp.push(next2);
            i2++;
        }
        else {
            temp.push(next2);
            i2++;
            i11++;
        }
    }
    return temp[n-1];
}
const log  = console.log
log(main(1));
log(main(2));
log(main(3));
log(main(4));
log(main(5));