const load_K_Quotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(load => displayData(load))
}

const displayData = quote => {
    const blockQuote = document.getElementById('kquotes');
    // console.log(quote);
    blockQuote.innerHTML =  quote.quote;
}

load_K_Quotes();