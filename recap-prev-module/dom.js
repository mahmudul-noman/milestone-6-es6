// Select by className & Change their color functionally
document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        friend.style.color = 'red';
    }
})


// select bu idName & Change text position
document.getElementById('center-btn').addEventListener('click', function(){
    const third = document.getElementById('third-frnd');
    third.style.textAlign = 'center';
})


// Add New Element 
document.getElementById('add-btn').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="frined-name">Added New Friend</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `
    friendContainer.appendChild(friend);
})

