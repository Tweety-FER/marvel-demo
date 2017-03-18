import {observable, action} from 'mobx';

import {Characters} from '../characters/characters';
import {ComicsService} from '../../services';

class ComicDetails {
  comicsService = new ComicsService();

  @observable isLoading = false;

  @observable title = 'Loading title...';

  @observable description = 'Loading description...';

  @observable thumbnail = null;

  @observable characters = null;

  @observable error = ''

  @action reset() {
    this.title = 'Loading title...';
    this.description = 'Loading description...';
    this.thumbnail = null;
    this.error = '';
  }

  @action load(id, keys) {
    this.isLoading = true;
    this.error = '';
    this.characters = new Characters(id);

    this
      .comicsService
      .getComic(id, keys)
      .then((response) => {
        const comic = response.json.data.results[0];
        this.title = comic.title;
        this.description = comic.description;
        this.thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        this.error = err.json 
          ? err.json.status 
          : err.statusText;
      });
  }
}

export default new ComicDetails();