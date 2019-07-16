// reverse order of alphabets in a string, retaining position of special characters
const isAlphabet = (c) => {
    return (c>='a' && c <='z') || (c>='A' && c <='Z')
}

const reverse_alphabets_only = (str: string) => {
    const charArr = str.split('');
    let start = 0;
    let end = charArr.length-1;
    while(start < end) {
        if(isAlphabet(charArr[start]) && isAlphabet(charArr[end])) {
            let temp = charArr[start];
            charArr[start] = charArr[end]
            charArr[end] = temp;
            start++;
            end--;
        }
        else if(isAlphabet(charArr[start])) {
            end--;
        }
        else if(isAlphabet(charArr[end])) {
            start++;
        }
        else {
            start++;
            end--;
        }
    }
    return charArr.join('');
}

export const main = reverse_alphabets_only;

console.log(main('..s.,ab'));
console.log(main('...,b'));
console.log(main('...,'));