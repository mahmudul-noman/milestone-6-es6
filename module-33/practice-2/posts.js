function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts') // get data from API
    .then(res => res.json()) // convert object to string/json
    .then(data => displayPosts(data)) // display data
}


/** STEP BY STEP
 * get the container element where we want to added
 * create child element
 * set innerText or innerHTML
 * appendChild
 */
function displayPosts(posts){
    const postContainer = document.getElementById('posts-container'); // get the container element where we want to added
    for (const post of posts){
        const postDiv = document.createElement('div'); // create element into <div id="posts-container"> code </div>
        postDiv.classList.add('post'); //style added
        postDiv.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post Title: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;                                          //create child element in div (which div we created dynamically)

        postContainer.appendChild(postDiv); // added appendChild
    }
}

loadPosts(); // function called