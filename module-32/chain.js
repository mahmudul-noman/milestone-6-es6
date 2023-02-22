const student = {
    campus : 'WUB',
    owner: 'Mr. Mannan Chowdhury',
    dept: {
        one: 'CSE',
        cse: {
            mtStudent: 500,
            result: [
                {avgPass: '85%', avgFail: '15%'},
                {avgPass: '55%', avgFail: '45%'}
            ],
        },
        tow: 'EEE',
        three: 'Civil',
        civil: {
            mStudent: 700,
            eStudent: 500
        },
        four: 'English',
        five: 'Pharmacy'
    }
};

// console.log(student?.dept?.cse?.result[1]?.avgFail); // Output: 45%
// console.log(student.owner); // Output: Mr. Mannan Chowdhury
// console.log(student.four); //undefined
// console.log(student.dept.four); // Output: English
// console.log(student.dept.civil); // Output: { mStudent: 700, eStudent: 500 }
// console.log(student.dept.civil.mStudent); // Output: 700