import config from "./config.js";

export async function getMovieDetails(id) {
  try {
    let request = await fetch(
      `${config.BACKEND_MAIN_URL}movie/${id}?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: config.TOKEN,
        },
      }
    );

    let data = await request.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
export function displayShow(movie) {
  let head = document.querySelector('.header')
  let htmlshow = "";
  htmlshow += `
      <div style="background-image: url(${config.BASE_IMG_URL + movie.backdrop_path}) ;" class="bg-img" >
        <div class="img-side">
        <img class="img-se" src="${config.BASE_IMG_URL + movie.poster_path}" alt="">
        </div>
        <div class="text-side">
          <div class="movie">
            <h1>${movie.title}</h1>
            <p><button>PG-14</button> ${movie.release_date} (${movie.origin_country[0]}) • Science Fiction , Adventure • 2h 47m</p>
          </div>

          <div class="user-score">
            <div class="circle-progressbar">
              <div class="progress-bar " role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"
                style="--value: 93"></div>
            </div>
            <h3>user <br> score</h3>
            <div class="d-flex">
              <p><i class="fa-solid fa-star"></i></p>
              <p><i class="fa-solid fa-star"></i></p>
              <p><i class="fa-solid fa-star"></i></p>
              <p><i class="fa-solid fa-star"></i></p>
              <p><i class="fa-solid fa-star"></i></p>
            </div>
            <button class="movie-btn"> What's your vibe? ©</button>
          </div>
          <div class="pley-trailer">
            <i class="br fa-solid fa-list"></i>
            <i class="br fa-solid fa-heart"></i>
            <i class="br fa-solid fa-bookmark"></i>
            <button> <i class="fa-solid fa-play"></i> play trailer</button>
          </div>
          <div class="owerview">
            <i>${movie.tagline}</i>
            <h1>owerview</h1>
            <p class="follow">${movie.overview}</p>
            <div class="people">
              <div class="denis">
                <h3>Denis Villeneuve</h3>
                <p>Director, Screenplay</p>
              </div>
              <div class="frank">
                <h3>frank Herbet</h3>
                <p>Novel</p>
              </div>
              <div class="Jon">
                <h3>Jon Spaihts</h3>
                <p>Screenplay</p>
              </div>
            </div>

          </div>
        </div>
      </div>`

  head.innerHTML = htmlshow;
}

export async function getPeopleCredits(id) {
  try {
    let request = await fetch(
      `${config.BACKEND_MAIN_URL}movie/${id}/credits?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: config.TOKEN,
        },
      }
    );

    let data = await request.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function displayPeople(dataPeople) {
  let flex = document.querySelector('.flex')
  let people = ''
  console.log(dataPeople);
  dataPeople.cast.forEach((data) => {
    console.log(data);
    people += `
  <div class="person">
              <div class="border">
                <img src="${config.BASE_IMG_URL + data.profile_path}" alt="">
                <h2>${data.name}</h2>
                <p>${data.character}</p>
              </div>
            </div>`
  });

  flex.innerHTML = people;
}