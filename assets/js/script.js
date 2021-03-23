const movieApiKey ="f3192513&t=";
var searchInputEl = document.querySelector("#searchInput");
var searchBtnEl = document.querySelector("#searchBtn");
var thumbnailEl = document.querySelector("#thumbnail");
var yearEl = document.querySelector("#year");
//var searchResults = document.querySelector("#searchResults");
var titleEl = document.querySelector("#title");
var ratingsEl = document.querySelector("#ratings");
var plotSumEl = document.querySelector("#plot");



var requestOptions = {
    method: "Get",
    redirect: "Follow"
};






function searching(event) {
    event.preventDefault();
    var omdbUrlFront = "http://www.omdbapi.com/?apikey=" + movieApiKey + "&t=";
    
    var userSelection = searchInputEl.value.trim();
    var completeUrl = omdbUrlFront + userSelection;
    
    
    console.log(completeUrl);
    fetch(completeUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
   

    thumbnailEl.innerHTML =
    `
    <ul>
    <li><img src= ${data.Poster}></li>
    </ul>
    `;
    
    // thumbnailEl.innerHTML =
    // `
    // <ul>
    // <li><img src= ${data.Poster}></li>
    // </ul>
    // `;

    titleEl.innerHTML =
    `
    <ul>
    <li>${data.Title}</li>
    </ul>
    ` ;

    yearEl.innerHTML =
    `
    <ul>
    <li>${data.Released}</li>
    </ul>
    `;

    plotSumEl.innerHTML =
    `
    <ul>
    <li>${data.Plot}</li>
    </ul>
    `;

    ratingsEl.innerHTML =
    `
    <ul>
    <li>Internet Movie Database: ${data.Ratings[0].Value}</li>
    <li>Rotten Tomatoes: ${data.Ratings[1].Value}</li>
    <li>Metacritic: ${data.Ratings[2].Value}</li>
    </ul>
    `;

    



    






   });
   
   






}

searchBtnEl.addEventListener("click", searching);