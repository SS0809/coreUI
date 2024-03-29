const main = document.querySelector('.main');

fetch('https://k1qsh8ytwc.execute-api.ap-southeast-2.amazonaws.com/default/TELECORE?limit=25&movies=true')
    .then(res => res.json())
    .then(data => {
        makeCategoryElement("Movies", data); // Assuming you want to display movies without categorization
    })
    .catch(err => console.error(err));

const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
        <h1 class="movie-category">${category}</h1>
        <div class="movie-container">
        </div>
    </div>
    `;
    makeCards('movies', data);
}

const makeCards = (id, data) => {
    const movieContainer = document.querySelector('.movie-container');
    let movieHTML = ''; // Store movie HTML to avoid multiple reflows
    data.forEach((item, i) => {
        const imgSrc = 'https://ucarecdn.com/' + (item.img_data.length > 0 ? item.img_data[0] : '');
        if (imgSrc) {
            const queryString = Object.keys(item) // Remove img_data field from query string
                .filter(key => key !== 'img_data')
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(item[key]))
                .join('&');
            movieHTML += `
                <div class="movie" onclick="location.href = '/${item.drive_code}?${queryString}&img=${(imgSrc)}/'">
                    <img src="${imgSrc}/" alt="">
                    <p class="movie-title">${item.movie_name}</p>
                </div>
            `;
        }
    });
    movieContainer.innerHTML = movieHTML;
}
