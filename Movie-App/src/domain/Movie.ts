export default class Movie {
  constructor(
    public id: number,
    public title: string,
    public poster: string,
    public year: number,
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
