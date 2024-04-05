const main = document.querySelector('.main');
let type = parseInt(window.location.hash.substring(1)) || 0; // Parse integer from hash
type *= 12; // Multiply type by 12
fetch('https://k1qsh8ytwc.execute-api.ap-southeast-2.amazonaws.com/default/TELECORE?limit=12&offset=' + type + '&nodflix=true')
    .then(res => res.json())
    .then(data => {
        makeCategoryElement("Movies", data);
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
    let movieHTML = '';
    data.forEach((item, i) => {
        const imgSrc = 'https://ucarecdn.com/' + (item.img_data.length > 0 ? item.img_data[0] : '');
        if (imgSrc) {
            const queryString = Object.keys(item)
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
    // Add event listeners to movie cards
    const movieCards = document.querySelectorAll('.movie');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            // Handle card click event
            // Construct URL and navigate to it
            const driveCode = item.drive_code; // Assuming drive_code is a property of the item
            const url = `/${driveCode}?${queryString}&img=${encodeURIComponent(imgSrc)}/`;
            window.location.href = url;
        });
    });
}

function updateHash(hash) {
    window.location.hash = hash;
    window.location.reload();
}