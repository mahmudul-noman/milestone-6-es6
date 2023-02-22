const student = {
    name: 'Mahmudul Hasan',
    age: 25,
    class: 'BSC in CSE',
    marks: {
        graphics: 78,
        dataMining: 89,
        calculus: 98
    }
}

// const getFindings = student.marks.dataMining;
const getFindings = student.name;
console.log(getFindings);