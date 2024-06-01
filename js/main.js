document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const resultsSection = document.getElementById("resultsSection");
    const listsSection = document.getElementById("listsSection");
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });

    searchButton.addEventListener("click", async () => {
        const query = searchInput.value;
        if (query) {
            const movies = await searchMovies(query);
            displayResults(movies);
        }
    });

   function displayResults(movies) {
    if (!movies || movies.length === 0) {
        resultsSection.innerHTML = "<p>No results found.</p>";
        return;
    }

    resultsSection.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button onclick="addToList('${movie.imdbID}')">Add to List</button>
        </div>
    `).join('');
    console.log(movies);
}

    displayUserLists();
});
