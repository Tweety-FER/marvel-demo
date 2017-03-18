import {observable, action, computed} from 'mobx';
import {ComicsService} from '../../services';

class Comics {
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
      .getComics()
      .then((response) => {
        this.isLoading = false;
        this.items = response.data.results;
      });
  }
}