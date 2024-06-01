function getLoggedInUser() {
    return localStorage.getItem("loggedInUser");
}

function getUserLists() {
    const user = getLoggedInUser();
    if (user) {
        return JSON.parse(localStorage.getItem(`${user}_lists`)) || [];
    }
    return [];
}

function saveUserLists(lists) {
    const user = getLoggedInUser();
    if (user) {
        localStorage.setItem(`${user}_lists`, JSON.stringify(lists));
    }
}

function addToList(movieId) {
    const movieTitle = prompt("Enter list name:");
    if (movieTitle) {
        const lists = getUserLists();
        let list = lists.find(l => l.title === movieTitle);
        if (!list) {
            list = { title: movieTitle, movies: [], public: false };
            lists.push(list);
        }
        list.movies.push(movieId);
        saveUserLists(lists);
        displayUserLists();
    }
}

function displayUserLists() {
    const listsSection = document.getElementById("listsSection");
    const lists = getUserLists();
    listsSection.innerHTML = lists.map(list => `
        <div class="list-card">
            <h3>${list.title}</h3>
            <button onclick="togglePublic('${list.title}')">${list.public ? "Make Private" : "Make Public"}</button>
            <ul>${list.movies.map(id => `<li>${id}</li>`).join('')}</ul>
        </div>
    `).join('');
}

function togglePublic(listTitle) {
    const lists = getUserLists();
    const list = lists.find(l => l.title === listTitle);
    if (list) {
        list.public = !list.public;
        saveUserLists(lists);
        displayUserLists();
    }
}
