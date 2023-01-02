export default class StorageService {
    get({ url }) {
        return JSON.parse(localStorage.getItem(url));
    }
    set({ url, data }) {
        localStorage.setItem(url, JSON.stringify(data));
    }
}
