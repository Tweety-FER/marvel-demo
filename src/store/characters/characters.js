import {observable, action, computed} from 'mobx';
import {CharactersService} from '../../services';

export class Characters {
  charactersService = new CharactersService();

  @observable items = [];

  @observable isLoading = false;

  @computed get isEmpty() {
    return this.items.length === 0;
  }

  constructor(comicId) {
    this.comicId = comicId;
  }

  _loadCharacters(keys, query) {
    if (this.comicId) {
      return this
        .charactersService
        .getCharactersForComic(this.comicId, keys, query);
    }

    return this
      .charactersService
      .getCharacters(keys, query);
  }

  @action load(keys, query) {
    this.isLoading = true;
    this.items = [];

    this
      ._loadCharacters(keys, query)
      .then((response) => {
        this.isLoading = false;
        this.items = response.data.results.map((result) => ({
          name: result.name,
          id: result.id,
          thumbnail: result.thumbnail,
        }));
      });
  }
}

export default new Characters();