import BaseApiService from './BaseApiService';

export default class ComicsService extends BaseApiService {
  _formatQuery(query) {
    return query ? {
      titleStartsWith: query,
    } : null;
  }

  getComics(keys, query) {
    return this.fetch('comics', keys, this._formatQuery(query));
  }

  getComic(id, keys) {
    return this.fetch(`comics/${id}`, keys, {comicId: id});
  }

  getComicsForCharacter(characterId, keys, query) {
    return this.fetch(`characters/${characterId}/comics`, keys, this._formatQuery(query));
  }
}
