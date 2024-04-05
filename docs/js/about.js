

const setupMovieInfo = () => {
    const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParamsObject = {};
for (const [key, value] of urlParams.entries()) {
    urlParamsObject[key] = value;
}
    const movieName = document.querySelector('.movie-name');
    const title = document.querySelector('title');
    const size = document.querySelector('.size');    
    const backdrop = document.querySelector('.movie-info');  

    title.innerHTML = movieName.innerHTML = urlParamsObject.movie_name;
    size.innerHTML = urlParamsObject.size_mb+"MB";
    backdrop.style.backgroundImage = `url(${urlParamsObject.img})`;
}

setupMovieInfo(); 
