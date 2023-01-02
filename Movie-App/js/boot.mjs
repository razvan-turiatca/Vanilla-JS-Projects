import TMDBService from './services/TMDBService.mjs'
import StorageService from './services/StorageService.mjs'
import Movie from ' ./domain/Movie.mjs'
import Actor from './domain/Actor.mjs'

const tmdbs = new TMDBService()
const ss = new StorageService()

export { tmdbs, ss }
