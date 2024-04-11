async function getPopularMovies() {
  try {
    let request = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTg1YWI3NjY3ZDEwN2Q4YTEwOTE3NzdjMGY3ZWJhMiIsInN1YiI6IjYxZDJmOWMzNDI4NGVhMDA2NWZiZTEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.snR4qvkytDgCEpAd8-s4lezojCJpRjH_m9B7eiakpVA",
        },
      }
    );

    let data = await request.json();

    return data.results;
  } catch (err) {
    console.error(err);
  }
}

function displayMovies(movieList) {
  let cardList = document.querySelector(".card-list");
  let html = "";
  movieList.forEach((movie) => {
    html += ` <card  data-id='' class="movieCard">
      <a href="movie.html" data-click="true" class="card-img-btn">
        <img
          class="card-img img-fluid"
          src="https://api.themoviedb.org/3/${movie.poster_path}"
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
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
            style="--value: 88"
          ></div>
        </div>
        <a href="movie.html" data-click="true" class="card-title"> ${movie.title} </a>
        <p class="card-text">Mar 25, 2022</p>
      </div>
    </card>
    `;
  });
  cardList.innerHTML = html;
}


getPopularMovies().then((data) => {
    displayMovies(data)
  });