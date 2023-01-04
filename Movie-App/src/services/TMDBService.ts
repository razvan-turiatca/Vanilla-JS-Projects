export default class TMDBService {
  accessKey: string
  baseUrl: string
  constructor() {
    this.accessKey = 'ff701bbe69e6eb8260529e58737a2533'
    this.baseUrl = 'https://api.themoviedb.org/3'
  }

  get({ method, url, onSuccess }) {
    fetch(`${this.baseUrl + url}?api_key=${this.accessKey}`)
      .then((res) => res.json())
      .then((data) => onSuccess(data))
  }
  set(options) {}
}
