// find first non repeating character in a string;
/*
* ananda => d
*/

/**
 * iterrate over string and add frequency to hashmap
 * iterate second time string and find char with frequency 1
 * @param s 
 */

export const main = (s: string) => {
    const map = new Map<string, number>();

    for(let i = 0; i < s.length; i++) {
        const key = s.charAt(i);
        const frequency = map.get(key) || 0
        map.set(key,frequency+1);
    }
    for(let i = 0; i < s.length; i++) {
        const key = s.charAt(i);
        if(map.get(key) === 1) {
            return key;
        } 
    }
    return -1;
}

console.log(main('geeksforgeeks'));
console.log(main('aa'));
console.log(main('a'));