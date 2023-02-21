// Template String:
const a = 20;
const b = 50;

const summary = 'Sum of: ' + a + ' and ' + b + ' is = ' + (a+b);
// console.log(summary);

// we use this
const newSummary = `Sum of: ${a} and ${b} is = ${a+b}`;
console.log(newSummary);