function add(num1, num2 = 25){
    const total = num1 + num2;
    return total;
}
const totalResult = add(10);
// console.log(totalResult);



function fullName (firstName, lastName = 'Hasan'){
    const name = firstName + ' ' + lastName;
    return name;
}
const name = fullName('Mahmudul');
console.log(name);