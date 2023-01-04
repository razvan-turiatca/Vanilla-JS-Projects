import Actor from './domain/Actor'
import PopularMovies from './components/PopularMovies'

const popularMovies = new PopularMovies(
  document.querySelector('#popular-movies'),
)
popularMovies.getMovies()
