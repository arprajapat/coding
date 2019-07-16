/**
# Write a function to generate the nth number in the series
# Each element of series is comprised of 4s and 5s only. Series is in ascending order.
# Each element in the series is a palindrome with even length only
# Series is like this -> 44, 55, 4444, 4554, 5445, 5555 ...

# Example
# Input - n = 7
# Output - 444444
 */

export const main = (n: number) => {
    if(n<=0) return 0;
    
    let digit = 1;
    let count = 2;
    while(count < n) {
        count = 2*count+2  // f(n+1) = 2*f(n)+2;
        digit++;
    }

    if(n == count) {
        let res = 0;
        while(digit){
            res = res*10+5;
            digit--;
        } 
        return res;
    }

    count = (count/2)-1  // reverse the extra count value
    let countDiff = n-count;
    let binary = (countDiff-1).toString(2);  // convert decimal to binary string

    while(binary.length!=digit) binary = '0'+binary;  // add 0 to ensure binary string length equal to digit count;

    let res = 0;
    for(let i = 0;i<binary.length;i++) {
        if(binary[i]=='1') {
            res = res*10+5
        }
        else {
            res = res*10+4
        }
    }
    return res;
}

for(let i = 1;i<15;i++)
console.log(main(i))