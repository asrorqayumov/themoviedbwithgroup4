import config from "./config.js";

function loopMovieNames(arr) {
    let html = '';

    arr.forEach(movie => {
        html += `${movie.title || movie.name}, `
    });

    return html;
}

export async function getPopularPeople() {
    try {
      let request = await fetch(
        `${config.BACKEND_MAIN_URL}person/popular?language=en-US&page=1`,
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
//   profile_path
  export function displayPopularPeople(actors) {
    let head = document.querySelector('.popular-movie-people1')
    let htmlshow = "";
    actors.forEach(actor => {
        htmlshow += `
        <div class="image-card">
        <img src="${config.BASE_IMG_URL + actor.profile_path}" alt="">
        <div class="card-content">
            <h3>${actor.name}</h3>
            <p>
              ${loopMovieNames(actor.known_for)}
            </p>
        </div>
    </div>
        `
    });
  
    head.innerHTML = htmlshow;
  }