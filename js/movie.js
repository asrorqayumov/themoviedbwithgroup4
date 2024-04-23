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