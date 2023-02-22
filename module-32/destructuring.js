const student = {
    name: 'Mahmudul Hasan',
    Institute: 'WUB',
    dept: 'CSE',
    batch: '50B',
    roll: 3119    
}

const {name, occu, ...rest} = student;

console.log(name); //Mahmudul Hasan
console.log(rest); //{ Institute: 'WUB', dept: 'CSE', batch: '50B', roll: 3119 }