const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 15000 },
    { id: 1, name: 'tablet', price: 20000 },
    { id: 1, name: 'Bike', price: 150000 },
];

const expensive = products.filter(p => p.price > 100000);
console.log(expensive);