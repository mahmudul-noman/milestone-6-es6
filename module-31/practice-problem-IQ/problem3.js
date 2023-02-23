const myFunc = numbers => {
    return (numbers.map(num => num * 2)).reduce((prev, curr) => { return prev + curr }, 0) / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
const result = myFunc(numbers);
console.log(result);