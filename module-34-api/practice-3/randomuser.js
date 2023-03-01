const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    // name
    const showName = document.getElementById('name');
    console.log(user);
    showName.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    // gender
    const showGender = document.getElementById('gender');
    showGender.innerText = user.results[0].gender;

    // location
    const showLocation = document.getElementById('location');
    showLocation.innerText = user.results[0].location.country + ', ' + user.results[0].location.city + ', ' + user.results[0].location.street.name + ', ' + user.results[0].location.street.number;

    // profile
    const showProfile = document.getElementById('profile');
    showProfile.innerHTML = `
    <img src="${user.results[0].picture.medium}">
    `

    // phone
    const showPhone = document.getElementById('phone');
    showPhone.innerText = user.results[0].phone;

}

loadRandomUser();