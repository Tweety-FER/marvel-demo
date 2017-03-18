import {observable, action, computed} from 'mobx';
import {ComicsService} from '../../services';

export class Comics {
  comicsService = new ComicsService();

  @observable items = [];

  @observable isLoading = false;

  @observable error = ''

  @computed get isEmpty() {
    return this.items.length === 0;
  }

  constructor(characterId) {
    this.characterId = characterId;
  }

  _loadComics(keys, query) {
    if (this.characterId) {
      return this
        .comicsService
        .getComicsForCharacter(this.characterId, keys, query);
    }

    return this
      .comicsService
      .getComics(keys, query);
  }

  @action load(keys, query) {
    this.isLoading = true;
    this.items = [];
    this.error = '';

    this
      ._loadComics(keys, query)
      .then((response) => {
        this.isLoading = false;
        this.items = response.json.data.results.map((result) => ({
          title: result.title,
          id: result.id,
          thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
        }));
      }).catch((err) => {
        this.isLoading = false;
        this.error = err.json ? err.json.message : err.statusText;
      });
  }
}

export default new Comics();