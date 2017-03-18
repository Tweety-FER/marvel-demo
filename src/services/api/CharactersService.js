import BaseApiService from './BaseApiService';

export default class CharactersService extends BaseApiService {
  getCharacters(keys, query) {
    const queryObject = query ? {
      nameStartsWith: query,
    } : null;

    return this.fetch('characters', keys, queryObject);
  }

  getCharacter(id, keys) {
    return this.fetch(`characters/${id}`, keys);
  }

  getCharacterComics(id, keys, query) {
    return this.fetch(`characters/${id}/comics`, keys, query);
  }
}
