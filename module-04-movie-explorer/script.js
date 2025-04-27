const OMDB_API_KEY = config.OMDB_API_KEY; // 🔐 Loaded securely from config.js

const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieResult = document.getElementById("movieResult");

searchBtn.addEventListener("click", () => {
  const title = movieInput.value.trim();
  if (title) {
    fetchMovie(title);
  }
});

async function fetchMovie(title) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(title)}`);

    const data = await res.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    displayMovie(data);
  } catch (err) {
    movieResult.innerHTML = `<p>❌ ${err.message}</p>`;
  }
}

function displayMovie(movie) {
  movieResult.innerHTML = `
    <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}" alt="Poster" />
    <h2>${movie.Title} (${movie.Year})</h2>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
  `;
}
