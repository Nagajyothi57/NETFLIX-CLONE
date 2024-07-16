document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        { title: "Movie 1", description: "Description for Movie 1", imgSrc: "https://static1.showtimes.com/poster/660x980/animal-174150.jpg" },
        { title: "Movie 2", description: "Description for Movie 2", imgSrc: "https://stat5.bollywoodhungama.in/wp-content/uploads/2022/08/Salaar.jpeg" },
        { title: "Movie 3", description: "Description for Movie 3", imgSrc: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/215726/KGF_POSTER_Fandango.jpg" },
        { title: "Movie 4", description: "Description for Movie 4", imgSrc: "https://www.filmibeat.com/ph-big/2022/03/kgf-chapter-2_164784859700.jpg" }
    ];

    const moviesContainer = document.getElementById('movies-container');

    function loadMovies(movies) {
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.imgSrc}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            movieElement.addEventListener('click', () => showMovieInfo(movie));
            moviesContainer.appendChild(movieElement);
        });
    }

    loadMovies(movies);

    const playButton = document.getElementById('play-button');
    const infoButton = document.getElementById('info-button');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('p');
    const searchBar = document.getElementById('search-bar');

    playButton.addEventListener('click', function() {
        alert('Playing the featured movie!');
    });

    infoButton.addEventListener('click', function() {
        showMovieInfo({ title: "Featured Movie", description: "This is the description of the featured movie." });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showMovieInfo(movie) {
        modalTitle.textContent = movie.title;
        modalDescription.textContent = movie.description;
        modal.style.display = 'block';
    }

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        loadMovies(filteredMovies);
    });
});