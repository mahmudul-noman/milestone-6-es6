const student = {name: 'noman', roll: 3119, campus: 'WUB', isRegular: true};

/** for of loop */
const keys = Object.keys(student);
for (const key of keys){
    console.log(key, student[key]);
}

/** for in loop */
for (const key in student){
    console.log(key, student[key]);
}


/** advanced */
const pair = Object.entries(student);
for(const[key, value] of pair){
    console.log(key, value);
}
