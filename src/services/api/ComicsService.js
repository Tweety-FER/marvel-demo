import BaseApiService from './BaseApiService';

export default class ComicsService extends BaseApiService {
  getComics(keys, query) {
    const queryObject = query ? {
      titleStartsWith: query,
    } : null;

    return this.fetch('comics', keys, queryObject);
  }

  getComic(id, keys) {
    return this.fetch(`comics/${id}`, keys);
  }

  getComicCharacters(id, keys, query) {
    return this.fetch(`comics/${id}/characters`, keys, query);
  }
}
