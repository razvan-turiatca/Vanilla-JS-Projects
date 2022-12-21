import TMDBService from './services/TMDBService.mjs'
import StorageService from './services/StorageService.mjs'

const tmdbs = new TMDBService()
const ss = new StorageService()

export { tmdbs, ss }
