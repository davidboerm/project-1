const movieApiKey ="f3192513&t=";
var searchInputEl = document.querySelector("#searchInput");                 //Yes this line is JavaScript. Lol
var searchBtnEl = $("#searchBtn");
var thumbnailEl = $("#thumbnail");
var yearEl = $("#year");
var titleEl = $("#title");
var ratingsEl0 = $("#ratings0");
var ratingsEl1 = $("#ratings1")
var ratingsEl2 = $("#ratings2")
var plotSumEl = $("#plot");



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
   
    thumbnailEl.attr("src", data.Poster);
    titleEl.text(data.Title);
    yearEl.text(data.Released);
    plotSumEl.text(data.Plot);
    ratingsEl0.text(`Internet Movie Database: ${data.Ratings[0].Value}`);
    ratingsEl1.text(`Rotten Tomatoes: ${data.Ratings[1].Value}`);
    ratingsEl2.text(`Metacritic: ${data.Ratings[2].Value}`);
    
   });
   

}

searchBtnEl.on("click", searching);