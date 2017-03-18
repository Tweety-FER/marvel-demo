import {observable, action, computed} from 'mobx';
import {CharactersService} from '../../services';

class Characters {
  charactersService = new CharactersService();

  @observable items = [];

  @observable isLoading = false;

  @computed get isEmpty() {
    return this.items.length === 0;
  }

  @action load(keys, query) {
    this.isLoading = true;
    this.items = [];

    this
      .charactersService
      .getCharacters(keys, query)
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