import * as HomePage from "./main.js";
import * as movieeeeeee from "./movie.js";

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
  }
  if (location.href == "http://127.0.0.1:5501/view/movie.html") {
    HomePage.navItem();

    MoviePage.getMovieDetails(history.state).then((data)=>{
      console.log(data);

    })
    
  }
});
