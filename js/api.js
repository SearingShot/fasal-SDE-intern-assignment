const OMDB_API_KEY = '3ea760a1';
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=`;
async function searchMovies(query) {
    try {
        const response = await fetch(`${OMDB_API_URL}${query}`);
        const data = await response.json();
        if (data.Response === "True") {
            return data.Search;
        } else {
            console.error("OMDB API error:", data.Error);
            return [];
        }
    } catch (error) {
        console.error("Network or other error:", error);
        return [];
    }
}
