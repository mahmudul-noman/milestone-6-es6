const numbers = [12, 56, 87, 46];
const half = numbers.map(n => n / 2);
// console.log(half);
const third = numbers.map(x => x / 3);
// console.log(third);


const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
const nameLength = friends.map(friend => friend.length);
// console.log(nameLength);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 15000 },
    { id: 1, name: 'tablet', price: 20000 },
    { id: 1, name: 'Bike', price: 150000 },
];

const items = products.map(product => product.name);
console.log(items);
const prices = products.map(price => price.price);
console.log(prices);