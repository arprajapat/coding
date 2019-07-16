export const main = (m: number, n: number) => {

    let arr = new Array(m);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n).fill(1);
    }
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = arr.length-1;
    let colEnd = arr[0].length-1;
    let toFill = 1;
    while(rowStart <= rowEnd && colStart <= colEnd) {
        for(let j = colStart ; j <= colEnd; j++) {
            arr[rowStart][j] = toFill++;
        }
        rowStart++;
        for(let j = rowStart ; j <= rowEnd; j++) {
            arr[j][colEnd] = toFill++;
        }
        colEnd--;
        if(rowStart<=rowEnd) {
            for(let j = colEnd ; j >= colStart; j--) {
                arr[rowEnd][j] = toFill++;
            }
        }
        rowEnd--;

        if(colStart<=colEnd) {
            for(let j = rowEnd ; j >= rowStart; j--) {
                arr[j][colStart] = toFill++;
            }
        }
        colStart++;
        // toFill++;
    }
    console.log(`\n${m}X${n}`);
    arr.map((value) => console.log(value.join(' ')))
}

main(6,2)

main(2,6)

main(6,6)

main(3,4)