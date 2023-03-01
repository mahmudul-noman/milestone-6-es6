const student = {name: 'noman', roll: 3119, campus: 'WUB', isRegular: true}

/** show only keys in output */
const infoKeys = Object.keys(student);
// console.log(infoKeys);

/** show only values in output */
const infoValues = Object.values(student);
// console.log(infoValues);

/** show keys and values both in output */
const infoEntries = Object.entries(student);
// console.log(infoEntries);

/** show output */
console.log(student);

/** use "object.seal" for stop delete any item */
/** if we use object.seal, we don't delete any item, we don't add new item. But, we can do modify or edit */
Object.seal(student);

/** use "object.freeze" for stop any types of action */
/** if we use object.freeze, we don't delete, add, edit any item */
Object.freeze(student)

/** delete single key-values from input */
delete student.isRegular;

/** modify items */
student.name = 'Mizanur Rahman';
student.roll = 3115;

/** add new item */
student.reg = 0320503115

/** show output */
console.log(student);