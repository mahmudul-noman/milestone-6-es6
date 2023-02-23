/**
 * Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends

b) Check if the length of each element is even, push elements
with even length to a new array and return the result
 */

const friendName = () => {
    const arrName = ['noman', 'mizanR', 'mamun', 'sotonA', 'sajeeb'];

    for (name of arrName) {
        if (name.length % 2 === 0) {
            console.log(name);
        }
    }
}

friendName();
