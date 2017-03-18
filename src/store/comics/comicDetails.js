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

    @action reset() {
    this.title = 'Loading title...';
    this.description = 'Loading description...';
    this.thumbnail = null;
  }

  @action load(id, keys) {
    this.isLoading = true;
    this.characters = new Characters(id);

    this
      .comicsService
      .getComic(id, keys)
      .then((response) => {
        const comic = response.data.results[0];
        this.title = comic.title;
        this.description = comic.description;
        this.thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        this.isLoading = false;
      });
  }
}

export default new ComicDetails();