// using fetch normally
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

// using fetch by function
function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(user => user.json())
    .then(userData => displayUsers(userData))
}

// fetch function
function displayUsers(data){
    console.log(data);
}