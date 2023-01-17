import Movie, { MovieDataMapper } from '../domain/Movie'
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
        const datatMapping = new MovieDataMapper()
        const movies = datatMapping.map(data.results)
        this.render(movies)
      },
    })
  }

  // render(movies: Movie[]) {
  //   this.rootElement.innerHTML = ''
  //   movies.forEach((movie) => {
  //     this.rootElement.innerHTML += `<h3>${movie.title}</h3>`
  //   })
  // }

  render = (movies: any[]) => {
    this.rootElement.innerHTML = `
        <div class="carousel-item text-center active">
            <img src="https://image.tmdb.org/t/p/w500/${movies[0].poster}">
            <h2 class="d-block w-100">${movies[0].title}</h2>
            <h3>Year: ${movies[0].year}</h3>
            <span>Rating: ${movies[0].rating}</span>
        </div>
    `
    movies.slice(1).forEach((movie) => {
      this.rootElement.innerHTML += `
            <div class="carousel-item text-center">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster}">
                <h2 class="d-block w-100">${movie.title}</h2>
                <h3>Year: ${movie.year}</h3>
                <span>Rating: ${movie.rating}</span>
            </div>
        `
    })
  }
}
