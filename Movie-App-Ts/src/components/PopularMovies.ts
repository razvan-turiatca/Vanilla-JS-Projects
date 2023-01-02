import TMDBService from '../ts/services/TMDBService'

export default class PopularMovies {
  getData() {
    const tmdbs = new TMDBService()
    tmdbs.get({
      method: 'GET',
      url: '/movie/popular',
      onSuccess: (data) => {
        console.log(data)
      },
    })
  }
}
