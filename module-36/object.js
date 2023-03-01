// System 1 : Object literal Syntax :: We Use This
const person = {
    name: 'noman',
    roll: 3119
}
// console.log(person);






// System 2 : Object Constructor
const person1 = new Object();
person1.name = 'noman';
person1.roll = 3119;
// console.log(person1);





// System 3: Constructor Function
function person2(name, roll) {
    this.name = name;
    this.roll = roll;
}
const personn = new person2('noman', 3119);
const personnn = new person2('nomanMH', 3119);
person2();
// console.log(personnn);






// System 4: ES6 Classes ::: We Use This
class student {
    constructor(name, roll, institute) {
        this.name = name;
        this.roll = roll;
        this.institute = institute;
    }
}

const studentOne = new student('Mahmudul Hasan', 3119, 'World University of Bangladesh');
const studentTwo = new student('Soton Ali', 3116);
console.log(studentOne);

