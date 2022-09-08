//API Keys and API Source
const apiKey = "d4e3a53fd6037b9eb3fcfa91c0ebdd2e";
const baseURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=d4e3a53fd6037b9eb3fcfa91c0ebdd2e&query=";
const imgBaseURL = "http://image.tmdb.org/t/p/w500";

//JSON Data Request and Import
axios.get(`${baseURL}${apiKey}`)
.then((res) => {
  data = res.data.results;
  data.map((item) => {
    Movie(item.poster_path, item.id);
  });
});

// Grid Items Images
function Movie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const grid = document.querySelector(".grid");
  div.appendChild(img);
  grid.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "file:///D:/HTML%20CSS/Movie-API/detail.html?movieId=" + id;
  });
}

// Search for movies API
function searhMovies() {
  document.getElementById("movies").innerHTML = "";
  let search = document.querySelector("#searchInput").value;

  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      Movie(item.poster_path, item.id);
    });
  });
}

// Dark Mode Toggle
function switchMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element = document.body;
    element.classList.toggle("colorr");
    }