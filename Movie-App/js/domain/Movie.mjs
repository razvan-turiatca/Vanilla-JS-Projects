class Movie {
  constructor(id, title, poster, year) {
    this.id = id
    this.title = title
    this.poster = poster
    this.year = year
  }

  setName(name) {
    this.title = name
  }
  getName() {
    return this.title
  }
  showPoster() {
    return this.poster
  }
  getYear() {
    return this.year
  }
}

export default Movie
