export default async function fetchMovies(movieTitle: string) {
  const url = `http://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=b01e3f27`;

  const response = await fetch(url);

  const moviesList = await response.json();

  return moviesList;
}
