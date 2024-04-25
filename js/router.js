import * as HomePage from "./main.js";
import * as MoviePage from "./movie.js";

window.addEventListener("popstate", (e) => {
  location.reload();
});
document.addEventListener("DOMContentLoaded", () => {
  if (
    location.href == "http://127.0.0.1:5501/view/" ||
    location.href == "http://127.0.0.1:5501/view/index.html"
  ) {
    HomePage.getTrendingMovies().then((data) => {
      HomePage.displayTrendingMovies(data);
      HomePage.randomBg(data);
      HomePage.navItem();
    });
    HomePage.getTrendingMoviesDay().then((data) => {
      HomePage.displayTrendingMoviesDay(data);
      HomePage.setEventImg();
    });
    HomePage.getPopularMovies().then((data) => {
      HomePage.displaypopularMovies(data);
    });
  }
  if (location.href == "http://127.0.0.1:5501/view/movie.html") {
    HomePage.navItem();
    MoviePage.getMovieDetails(history.state).then((data) => {
      document.title = `${data.title} | The movie Database `
      MoviePage.displayShow(data);
      MoviePage.getPeopleCredits(history.state).then((data) => {
        MoviePage.displayPeople(data);
      });
    });
  }
});
