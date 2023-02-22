/**
 * Normally We write function like this
 * This is called function declaration 
 * OR This is called: Regular Function
 */
function sumRE(a, b) {
    const doSum = a + b;
    return doSum;
}
const result = sumRE(5, 7);
// console.log(result);





// In ARROW => function: we write like this:::::::::::::::

// for single parameter
const sum1 = a => a * 2;
const value1 = sum1(2);
// console.log(value1);


// for multiple parameter
const sumAF = (a, b) => a + b;
const value = sumAF(2, 3);
// console.log(value);


// EX 2:
const sum3 = (a, b, c, d, e, f) => a + b + c + d + e + f;
const value3 = sum3(1, 2, 3, 4, 5, 6);
// console.log(value3);

// multiline arrow function
const doMath = (x, y, z) => {
    const sum1 = x + y;
    const sum2 = y + z;
    const multiply = sum1 * sum2;
    const divide = multiply / 2;
    return divide;
}






