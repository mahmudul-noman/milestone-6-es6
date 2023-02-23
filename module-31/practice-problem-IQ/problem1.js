// Problem -1
/**
 * Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.
 */
const value = (a, b, c) => (a * b * c)
const multiply = value(1, 2, 3);
// console.log(multiply);




// Problem -2
/**
 * Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
 */
const firstLine = 'I am a web developer.';
const secondLine = 'I love to code.';
const thirdLine = 'I love to eat biryani.'
// console.log(`${firstLine} ${secondLine} ${thirdLine}`);




// Problem -3
/**
 * Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
 */
const para = (a, b = 7) => (a + b);
const result = para(7);
// console.log(result);