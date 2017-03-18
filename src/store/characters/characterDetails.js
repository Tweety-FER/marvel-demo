import {observable, action} from 'mobx';

import {Comics} from '../comics/comics';
import {CharactersService} from '../../services';

class CharacterDetails {
  charactersService = new CharactersService();

  @observable isLoading = false;

  @observable name = 'Loading name...';

  @observable description = 'Loading description...';

  @observable thumbnail = null;

  @observable characters = null;

  @action reset() {
    this.name = 'Loading name...';
    this.description = 'Loading description...';
    this.thumbnail = null;
  }

  @action load(id, keys) {
    this.isLoading = true;
    this.comics = new Comics(id);

    this
      .charactersService
      .getCharacter(id, keys)
      .then((response) => {
        const character = response.data.results[0];
        this.name = character.name;
        this.description = character.description;
        this.thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        this.isLoading = false;
      });
  }
}

export default new CharacterDetails();