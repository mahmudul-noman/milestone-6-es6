const firstArr = [1, 2, 3, 4, 5]; // first array
const secondArr = [6, 7, 8, 9, 10]; // second array
const newArr = [...firstArr, ...secondArr]; //binding array

const myFunc = (number) => {
    const resultF = Math.max(...newArr); //find max number from array
    return resultF;
}
const myResult = myFunc(newArr) //get array in the function
console.log(myResult);