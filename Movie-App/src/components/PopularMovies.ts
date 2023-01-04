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

  render(movies: Movie[]) {
    this.rootElement.innerHTML = ''
    movies.forEach((movie) => {
      this.rootElement.innerHTML += `<h3>${movie.title}</h3>`
    })
  }
}
