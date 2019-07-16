/**
Given a compressed string in which a number followed by [] indicate how many times those characters occur,
decompress the string
Eg. : a3[b2[c1[d]]]e will be decompressed as abcdcdbcdcdbcdcde.
Assume the string is well formed and number will always be followed by a [].

a3[b2[c1[d]]]e  == > abcdcdbcdcdbcdcde
a3[b2[c1[d]2[e]]]e 
Solution: add index in stack if [ 
 */
export const main = (str: string) => {
    const Nstack: number[]  = [];
    const Cstack: string[] = [];

    for(let i =0;i< str.length;i++) {
        if(str[i]>='0' && str[i]<='9') {
            let num: number = 0;
            while(str[i]>='0' && str[i]<='9') {
                num = 10*num + parseInt(str[i]);
                i++;
            }
            // remove extra increment;
            i--;
            Nstack.push(num);

        }
        else if(str[i]===']') {
            let count = Nstack.pop();
            let pop = Cstack.pop();
            let temp = '';
            while(pop!='[') {
                temp = pop+temp;
                pop = Cstack.pop();
            }
            while(count) {
                Cstack.push(temp);
                count--;
            }
        }
        else {
            Cstack.push(str[i]);
        }
    }
    console.log(Cstack.join(''));
    console.log(Nstack.join(''));
    return Cstack.join('');
}
/**
 * can be done with one stack. 
 * start adding from right size of string
 * add one by one all char until `[` appear and pop all character till corresponding open
 * bracket appear and concat all characters and form a string
 * concat the the string no of time given after `[` and put it back to stack;
 * repeat the process till start of the string
 *  credit : Rachit Sukla
 */
main('a3[b2[c1[d]]]e');
main('a13[b]e');
main('3[b2[ca]]')