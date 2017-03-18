import BaseApiService from './BaseApiService';

export default class ComicsService extends BaseApiService {
  getComics(keys, query) {
    return this.fetch('comics', keys, query);
  }

  getComic(id, keys, query) {
    return this.fetch(`comics/${id}`, keys, query);
  }

  getComicCharacters(id, keys, query) {
    return this.fetch(`comics/${id}/characters`, keys, query);
  }
}
