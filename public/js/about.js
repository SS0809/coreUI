const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParamsObject = {};
for (const [key, value] of urlParams.entries()) {
    urlParamsObject[key] = value;
}

const setupMovieInfo = (data) => {
    const movieName = document.querySelector('.movie-name');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-info');
    const download = document.querySelector('.download');    

    title.innerHTML = movieName.innerHTML = data.movie_name;

    backdrop.style.backgroundImage = `url(${data.img})`;
    download.href = `/${data.telegram}`;
}

setupMovieInfo(urlParamsObject); 
