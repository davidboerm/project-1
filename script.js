


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


fetch('https://imdb-api.com/en/API/SearchMovie/k_5bd4orp9/The Rock', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



fetch('https://imdb-api.com/en/API/Ratings/k_5bd4orp9/tt0117500', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

fetch('https://imdb-api.com/API/Wikipedia/k_5bd4orp9/tt0117500', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

fetch('https://imdb-api.com/API/ExternalSites/k_5bd4orp9/tt0117500', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));










