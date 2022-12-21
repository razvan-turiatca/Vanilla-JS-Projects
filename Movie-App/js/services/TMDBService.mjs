// TMDB Service module

class TMDBService {
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

  //   get(options) {
  //     let params = ''
  //     if (options.params) {
  //       for (let i = 0; i < Object.keys(options.params).length; i++) {
  //         params += `&${Object.keys(options.params)[i]}=${
  //           options.params[Object.keys(options.params)[i]]
  //         }`
  //       }
  //     }

  //     return fetch(
  //       `${this.baseUrl}${options.url}${this.accessKey}${params}`,
  //     ).then((response) => response.json())
  //   }

  //   set(options) {}
}

export default TMDBService
