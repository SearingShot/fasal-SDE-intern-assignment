# Movie Library Web Application

This is a web application for managing a movie library. Users can sign up, log in, search for movies using the OMDB API, and create lists of their favorite movies. These lists can be either public or private.

## Features

1. **User Authentication**: Users can sign up and log in to the application.
2. **Movie Search**: Users can search for movies using the OMDB API.
3. **Movie Lists**: Users can create and manage lists of movies. Lists can be made public or private.
4. **Responsive Design**: The application has a responsive design for an optimal user experience on different devices.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- OMDB API

## Project Structure

```
movie-library/
│
├── index.html
├── login.html
├── signup.html
├── home.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── auth.js
│   ├── api.js
│   └── list.js
│
└── README.md
```

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SearingShot/fasal-SDE-intern-assignment.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd fasal-SDE-intern-assignment
   ```

3. **Open `index.html` in your web browser**:

   You can open the `index.html` file directly in your browser or use a local web server for a better experience. If you have Python installed, you can start a simple HTTP server:

   ```bash
   python -m http.server
   ```

   Then, navigate to `http://localhost:8000` in your web browser.

## Usage

1. **Sign Up**: Navigate to the sign-up page and create a new account.
2. **Log In**: Use your credentials to log in.
3. **Search for Movies**: Use the search bar on the home page to find movies.
4. **Create Movie Lists**: Add movies to lists and manage them. You can make lists public or private.

## OMDB API Key

Replace `'your_omdb_api_key'` in `js/api.js` with your actual OMDB API key. You can get an API key by signing up at [OMDB API](http://www.omdbapi.com/apikey.aspx).

```javascript
const OMDB_API_KEY = 'your_omdb_api_key';
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=`;
```

## Screenshots

**Login Page**:
![Login Page](https://github.com/SearingShot/fasal-SDE-intern-assignment/assets/121299642/9667e9b8-ba03-49f3-b9fc-c572092d5947)

**Sign Up Page**:
![Sign Up Page](https://github.com/SearingShot/fasal-SDE-intern-assignment/assets/121299642/c762e021-79ce-44fa-aa23-12ddbf8bc77d)

**Home Page**:
![Home Page](https://github.com/SearingShot/fasal-SDE-intern-assignment/assets/121299642/fdc29e67-4924-43a6-87e4-143f6f98639e)

**Search Results**:
![Search Results](https://github.com/SearingShot/fasal-SDE-intern-assignment/assets/121299642/b13a1574-5daf-4cd6-849e-a2e8ceccf7e6)


**Live Website Link**
https://movie-library-webapp.netlify.app/
