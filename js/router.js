import * as HomePage from "./main.js";
import * as MoviePage from "./movie.js";
import * as PopularPeople from "./popularPeople.js";

window.addEventListener("popstate", (e) => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  // nav code
  HomePage.navItem();
  
  if (
    location.href == "http://127.0.0.1:5502/view/" ||
    location.href == "http://127.0.0.1:5502/view/index.html"
  ) {
    HomePage.getTrendingMovies().then((data) => {
      HomePage.displayTrendingMovies(data);
      HomePage.randomBg(data);

    });
    HomePage.getTrendingMoviesDay().then((data) => {
      HomePage.displayTrendingMoviesDay(data);
    });
    HomePage.getPopularMovies().then((data) => {
      HomePage.displaypopularMovies(data);
      HomePage.setEventImg();
    });
  }
  if (location.href == "http://127.0.0.1:5502/view/movie.html") {
    MoviePage.getMovieDetails(history.state).then((data) => {
      document.title = `${data.title} | The movie Database `
      MoviePage.displayShow(data);
      MoviePage.displayAbout(data)
      MoviePage.getPeopleCredits(history.state).then((data) => {
        MoviePage.displayPeople(data);
      });
    });
    MoviePage.recommendationsMovie(history.state).then((data)=>{
      MoviePage.displayRec(data)
    })
  }

  if (location.href == "http://127.0.0.1:5502/view/popularPeople.html") {
    PopularPeople.getPopularPeople().then((data) => {
      PopularPeople.displayPopularPeople(data);
    })
  }
});

