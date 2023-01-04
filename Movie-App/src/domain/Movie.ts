import TMDBService from '../services/TMDBService'
export default class Movie {
  constructor(
    public id: number,
    public title: string,
    public poster: string,
    public year: number,
    public language: string,
  ) {}

  setName(name: string) {
    this.title = name
  }
  getName(): string {
    return this.title
  }
  showPoster(): string {
    return this.poster
  }
  getYear(): number {
    return this.year
  }
}

export class MovieDataMapper {
  map(data) {
    const movies = []
    data.forEach((result) => {
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
    return movies
  }
}
