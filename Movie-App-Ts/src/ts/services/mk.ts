export default class TMDBservice {
  accessKey: string
  baseUrl: string

  constructor() {
    this.accessKey = '6e6901b77acb7c139ac4bb8814c22f9e'
    this.baseUrl = 'https://api.themoviedb.org/3'
  }

  get(options) {
    let params: string = ``

    if (options.params) {
      let keyArr: string[] = Object.keys(options.params)
      keyArr.forEach((key) => (params += `&${key}=${options.params[key]}`))
    }

    return fetch(
      `${this.baseUrl + options.url}?api_key=${this.accessKey}${params}`,
    ).then((response) => response.json())
  }
}
