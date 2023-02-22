//SYNTAX
/**
 * reduce(previous value, current value, Initial Value)
 * EX...........
 * const num = [1, 2, 3];
 * const getN = num.reduce(prev, curr, 0);
 * console.log(getN);
 */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getN = numbers.reduce((prev, curr) => {
    return prev + curr;
}, 0);
console.log(getN);



