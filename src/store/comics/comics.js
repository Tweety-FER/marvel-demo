import {observable, action, computed} from 'mobx';
import {ComicsService} from '../../services';

export class Comics {
  comicsService = new ComicsService();

  @observable items = [];

  @observable isLoading = false;

  @computed get isEmpty() {
    return this.items.length === 0;
  }

  @action load(keys, query) {
    this.isLoading = true;
    this.items = [];

    this
      .comicsService
      .getComics(keys, query)
      .then((response) => {
        this.isLoading = false;
        this.items = response.data.results.map((result) => ({
          title: result.title,
          id: result.id,
          thumbnail: result.thumbnail,
        }));
      });
  }
}

export default new Comics();