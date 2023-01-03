class StorageService {
  get({ url }) {
    JSON.parse(localStorage.getItem(url))
  }
  set({ url, data }) {
    localStorage.setItem(url, JSON.stringify(data))
  }
}

export default StorageService
