// load all phones
const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

// display all phones
const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerHTML = '';
    console.log(phones);

    // display 20 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 9) {
        phones = phones.slice(0, 9);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    // error message show, if search with wrong keyword
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="col">
        <div class="card p-4">
            <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${phone.phone_name}</h4>
                <h5 class="brand text-muted">${phone.brand}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
            </div>
        </div>
    </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });

    toggleSpinner(false);
};


// button handler function
const processSuccess = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// button handler
document.getElementById('btn-search').addEventListener('click', function () {
    processSuccess(9);
})
// enter button handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      processSuccess(9);
    }
});


// loader or spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


// load show all data
document.getElementById('show-all-btn').addEventListener('click', function(){
    processSuccess();
})


const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
    console.log(data.data)
}


// phone details display in modal
const displayPhoneDetails = phone => {
    document.getElementById('phoneDetailsModalLabel').innerText = phone.name;
    const phoneDetails = document.getElementById('modal-body');
    phoneDetails.innerHTML = `
        <img class="img-thumbnail" src="${phone.image}">
        <h5 class="text-success">Name: ${phone.name}</h5>
        <p>Memory: ${phone.mainFeatures.memory}</p>
        <p>Display Size: ${phone.mainFeatures.displaySize}</p>
        <p>Sensors: ${phone.mainFeatures.sensors}</p>
        <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'No Information Found'}</p>
        <p>${phone.releaseDate}</p>
        <p class="text-danger">Need to Know Price? Please Call: 01626382361</p>
    `
}



loadPhones('phone');