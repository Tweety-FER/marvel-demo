import BaseApiService from './BaseApiService';

export default class CharactersService extends BaseApiService {
  _formatQuery(query) {
    return query ? {
      nameStartsWith: query,
    } : null;
  }

  getCharacters(keys, query) {
    return this.fetch('characters', keys, this._formatQuery(query));
  }

  getCharacter(id, keys) {
    return this.fetch(`characters/${id}`, keys, {characterId: id});
  }

  getCharactersForComic(comicId, keys, query) {
    return this.fetch(`comics/${comicId}/characters`, keys, this._formatQuery(query));
  }
}
