export const main = (s: string) => {
    if(!s.length || s.length == 1) return s;
    let longestSS = '';
    for(let i = 0; i < s.length; i++) {

        const temp1 = extendPalindrome(s, i, i);
        const temp2 = extendPalindrome(s, i, i+1);

        const temp = temp1.length < temp2.length ? temp2 : temp1;
        if(longestSS.length<temp.length) {
            longestSS = temp;
        }
    }
    console.log(longestSS)
    return longestSS;
}

const extendPalindrome = (s: string, i: number, j:number): string => {
    let start = i, end = i;
    while(i >= 0 && j < s.length && s[i] === s[j]) {
        start = i;
        end = j;
        i--;
        j++;
    }
    return s.substring(start,end+1);
}

main('babad');