import moment from "../node_modules/moment/dist/moment.js";
import config from "./config.js";

export function calcVoteAverage(vote) {
  return Math.round(vote * 10);
}

 export async function getTrendingMovies() {
  try {
    let request = await fetch(
      `${config.BACKEND_MAIN_URL}trending/movie/week?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: config.TOKEN,
        },
      }
    );

    let data = await request.json();

    return data.results;
  } catch (err) {
    console.error("hello error");
  }
}



 export function navItem() {
  let film = document.querySelector('.film')
  let navClick = document.querySelector('.click')
  film.addEventListener('mouseover', (e) => {
    navClick.style.display = 'flex'
  })
  navClick.addEventListener('mouseover', (e) => {
    navClick.style.display = 'flex'
  })
  film.addEventListener('mouseout', (e) => {
    navClick.style.display = 'none'
  })
  navClick.addEventListener('mouseout', (e) => {
    navClick.style.display = 'none'
  })

  let twshow = document.querySelector('.twShows')
  let twshows = document.querySelector('.tw-shows')
  twshow.addEventListener('mouseover', (e) => {
    twshows.style.display = 'flex'
  })
  twshows.addEventListener('mouseover', (e) => {
    twshows.style.display = 'flex'
  })
  twshows.addEventListener('mouseout', (e) => {
    twshows.style.display = 'none'
  })
  twshow.addEventListener('mouseout', (e) => {
    twshows.style.display = 'none'
  })

  let peopleA = document.querySelector('.people-a')
  let people = document.querySelector('.people')
  peopleA.addEventListener('mouseover', (e) => {
    people.style.display = 'flex'
  })
  people.addEventListener('mouseover', (e) => {
    people.style.display = 'flex'
  })
  people.addEventListener('mouseout', (e) => {
    people.style.display = 'none'
  })
  peopleA.addEventListener('mouseout', (e) => {
    people.style.display = 'none'
  })

  let moreA = document.querySelector('.moreA')
  let more = document.querySelector('.more')
  moreA.addEventListener('mouseover', (e) => {
    more.style.display = 'flex'
  })
  more.addEventListener('mouseover', (e) => {
    more.style.display = 'flex'
  })

  more.addEventListener('mouseout', (e) => {
    more.style.display = 'none'
  })
  moreA.addEventListener('mouseout', (e) => {
    more.style.display = 'none'
  })
}

export function displayTrendingMovies(movieList) {
  //this week movies
  let cardList = document.querySelector(".card-week");
  let html = "";
  movieList.forEach((movie) => {
    html += ` <card  data-id='' class="movieCard">
      <a href="movie.html" data-click="true" class="card-img-btn">
        <img
          class="card-img img-fluid"
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          alt="something movie"
        />
      </a>
      
      <div class="card-body">
        <div class="card-click">
          <ul>
            <li>
              <button class="addlistbtn" data-addlist="false">
                <i class="fa-solid fa-list"></i>
                Add to list</button>
            </li>
            <li>
              <button class="favbtn" data-favlist="false">
                <i class="fa-solid fa-heart"></i>
                Favourite</button>
            </li>
            <li>
              <button  class="watchbtn" data-watchlist="false">
                <i class="fa-solid fa-clipboard-list"></i>
                Watchlist
              </button>
            </li>
            <li  class="Rating">
              <button class="ratebtn" title="Rate It">
              <i class="fa-solid fa-star"></i>
              Rate
              </button>
              <div class="star-rating star-rating-card mt-1 px-1">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                      <i class="fa-solid fa-circle-minus removebtn my-2 px-1"></i>
                    </div>
              </li>
          </ul>
        </div>
        <div class="circle-progressbar">
          <div
            role="progressbar"
            aria-valuenow="${calcVoteAverage(movie.vote_average)}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="--value: ${calcVoteAverage(movie.vote_average)}"
          ></div>
        </div>
        <a href="movie.html" data-click="true" class="card-title"> ${
          movie.title
        } </a>
        <p class="card-text">${moment(movie.release_date).format("ll")}</p>
      </div>
    </card>
    `;
  });
  cardList.innerHTML = html;
}

export async function getTrendingMoviesDay() {
  try {
    let request = await fetch(
      `${config.BACKEND_MAIN_URL}trending/movie/day?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: config.TOKEN,
        },
      }
    );

    let data = await request.json();

    return data.results;
  } catch (err) {
    console.error(err);
  }
}
export function displayTrendingMoviesDay(data) {
  //today movies
  let cardToday = document.querySelector(".card");
  let html2 = "";
  data.forEach((movie) => {
    html2 += ` <card  data-id='' class="movieCard">
      <a href="movie.html" data-click="true" class="card-img-btn">
        <img
          class="card-img img-fluid"
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          alt="something movie"
        />
      </a>
      
      <div class="card-body">
        <div class="card-click">
          <ul>
            <li>
              <button class="addlistbtn" data-addlist="false">
                <i class="fa-solid fa-list"></i>
                Add to list</button>
            </li>
            <li>
              <button class="favbtn" data-favlist="false">
                <i class="fa-solid fa-heart"></i>
                Favourite</button>
            </li>
            <li>
              <button  class="watchbtn" data-watchlist="false">
                <i class="fa-solid fa-clipboard-list"></i>
                Watchlist
              </button>
            </li>
            <li  class="Rating">
              <button class="ratebtn" title="Rate It">
              <i class="fa-solid fa-star"></i>
              Rate
              </button>
              <div class="star-rating star-rating-card mt-1 px-1">
                      <input type="radio" id="5-stars" name="rating" value="5" />
                      <label for="5-stars" class="star">&#9733;</label>
                      <input type="radio" id="4-stars" name="rating" value="4" />
                      <label for="4-stars" class="star">&#9733;</label>
                      <input type="radio" id="3-stars" name="rating" value="3" />
                      <label for="3-stars" class="star">&#9733;</label>
                      <input type="radio" id="2-stars" name="rating" value="2" />
                      <label for="2-stars" class="star">&#9733;</label>
                      <input type="radio" id="1-star" name="rating" value="1" />
                      <label for="1-star" class="star">&#9733;</label>
                      <i class="fa-solid fa-circle-minus removebtn my-2 px-1"></i>
                    </div>
              </li>
          </ul>
        </div>
        <div class="circle-progressbar">
          <div
            role="progressbar"
            aria-valuenow="${calcVoteAverage(movie.vote_average)}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="--value:${calcVoteAverage(movie.vote_average)}"
          ></div>
        </div>
        <a href="movie.html" data-click="true" class="card-title"> ${
          movie.title
        } </a>
        <p class="card-text">Mar 25, 2022</p>
      </div>
    </card>
    `;
  });
  cardToday.innerHTML = html2;

}



export function randomBg(data) {
  let randomNum = Math.trunc(Math.random() * 20);
  let bg = document.querySelector(".bg");
  bg.style.backgroundImage = `url(${config.BASE_IMG_URL}${data[randomNum].poster_path})`;
}
