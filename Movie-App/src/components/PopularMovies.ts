import Movie from '../domain/Movie'
import TMDBService from '../services/TMDBService'

export default class PopularMovies {
  rootElement: HTMLElement
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement
    this.getMovies()
  }

  getMovies() {
    const tmdbs = new TMDBService()
    tmdbs.get({
      method: 'GET',
      url: '/movie/popular',
      onSuccess: (data) => {
        console.log(data)
        const movies = []
        data.results.forEach((result) => {
          const movieData = result
          const movieObj = new Movie(
            movieData.id,
            movieData.title,
            movieData.poster_path, // check what source poster needs to be downloaded from (52:18)
            movieData.release_date,
            movieData.original_language,
          )
          movies.push(movieObj)
        })
        console.log(movies)
        this.render(movies)
      },
    })
  }

  render(movies: Movie[]) {
    this.rootElement.innerHTML = ''
    movies.forEach((movie) => {
      this.rootElement.innerHTML += `<h3>${movie.title}</h3>`
    })
  }
}
