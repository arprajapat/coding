/*
Given a number(Integer) . You have to represent that number into an expression.
The expression can have 3 in multiplication and  5 in addition. 
Expression have 1*3 is can be used in expression e.g. 8 = “((1*3) + 5)”
*/

export const main = (num: number) => {
    //base conditions. alone 5 doesn't fit requirement
    if(num == 3) return '(1*3)';
    if(num == 10) return '(5+5)';

    if(num % 3 == 0) {
        const mult = main(num/3);
        if(mult) {
            return `(${mult}*3)`
        }
    }
    if(num > 5){
        const add = main(num-5);
        if(add) {
            return `(${add}+5)`
        }
    }
    
    return false;
    
}

// const input = [];
for(let i =1;i<=100;i++)
console.log(i+' = '+main(i));