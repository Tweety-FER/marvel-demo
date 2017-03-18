import {observable, action} from 'mobx';

class KeyStore {
  @observable publicKey = '';

  @observable privateKey = '';
}

export default new KeyStore();