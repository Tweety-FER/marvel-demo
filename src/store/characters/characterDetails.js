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

  @observable error = ''

  @action reset() {
    this.name = 'Loading name...';
    this.description = 'Loading description...';
    this.thumbnail = null;
    this.error = '';
  }

  @action load(id, keys) {
    this.isLoading = true;
    this.error = '';
    this.comics = new Comics(id);

    this
      .charactersService
      .getCharacter(id, keys)
      .then((response) => {
        const character = response.json.data.results[0];
        this.name = character.name;
        this.description = character.description;
        this.thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        this.error = err.json 
          ? err.json.status 
          : err.statusText;
      });
  }
}

export default new CharacterDetails();