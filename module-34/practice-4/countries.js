const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries => {
    const allCountries = document.getElementById('all-countries');

    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <P>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button class="btn btn-info" onclick ="loadCountryDetails('${country.cca2}')">Details</button>
        `
        allCountries.appendChild(countryDiv);
    })
}

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country => {
    console.log(country);
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img class="mb-4" src="${country.flags.png}">
    `
}



loadCountries();