function getApi(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText 
}

let link = "https://imdb-api.com/en/API/SearchMovie/k_jlvhyo13/";
let linkreview = "https://imdb-api.com/en/API/Ratings/k_jlvhyo13/";

document.getElementById('btn').addEventListener("click", searchmovie);
function searchmovie(txt, movie, dados, id, arrayreview, reviews){
    txt = document.getElementById('input').value;
    movie = getApi(link + txt)
    dados = JSON.parse(movie);
    id = (dados.results[0].id)
    document.getElementById('title').innerHTML = ('Title: ' + dados.results[0].title)
    document.getElementById('poster').src = (dados.results[0].image)
    
    
    arrayreview = getApi(linkreview + id)
    reviews = JSON.parse(arrayreview);
    document.getElementById('imdb').innerHTML = ('Imdb: ' + reviews.imDb)
    document.getElementById('metacritic').innerHTML = ('Metacritic: ' + reviews.metacritic)
    document.getElementById('themoviedb').innerHTML = ('TheMovieDb: ' + reviews.theMovieDb)
    document.getElementById('rotten').innerHTML = ('RottenTomatoes: ' + reviews.rottenTomatoes)
}
