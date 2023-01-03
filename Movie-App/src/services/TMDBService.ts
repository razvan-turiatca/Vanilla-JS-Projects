class TMDBService {
  accessKey: string
  baseUrl: string
  constructor() {
    this.accessKey = 'ff701bbe69e6eb8260529e58737a2533'
    this.baseUrl = 'https://api.themoviedb.org/3'
  }

  get({ method, url, onSuccess }) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, `${this.baseUrl + url}?api_key=${this.accessKey}`)
    xhr.send()

    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText)
      onSuccess(data)
    }
  }
  set(options) {}
}

export default TMDBService
