const numbers = [12, 56, 87, 46, 5, 15];
const getFive = numbers.find(n => n % 5 === 0);
console.log(getFive);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'Walton Mobile', price: 7000 },
    { id: 4, name: 'watch', price: 15000 },
    { id: 5, name: 'tablet', price: 20000 },
    { id: 6, name: 'Bike', price: 150000 }
];


const cheap = products.find(p => p.price < 20000);
console.log(cheap);