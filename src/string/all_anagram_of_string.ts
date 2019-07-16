export const  main = (s: string) => {
    anagrams(s, '');
}
let set = new Set()
const anagrams = (s: string, curr: string) => {
    if(s.length==0) { 
        set.add(curr);
        // log(curr);
        return;
    }

    for(let i = 0; i < s.length;i++) {
        const ch = s[i];
        const rest = s.substring(0, i)+s.substring(i+1);
        anagrams(rest, curr+ch);
    }
}

// const log = console.log;

main('AABBCD');
console.log(set, set.size)
set.clear();
// main('ABCD');
// console.log(set, set.size)