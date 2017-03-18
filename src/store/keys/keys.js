import {observable, action, computed} from 'mobx';

class KeyStore {
  @observable publicKey = '';

  @observable privateKey = '';

  @action reset() {
    this.publicKey = '';
    this.privateKey = '';
  }

  @computed get activeKeys() {
    const singleCustomKey = (this.publicKey && !this.privateKey)
                         || (!this.publicKey && this.privateKey);
    
    if (singleCustomKey) {
      console.warn('One element of keypair defined, using default for other');
    }

    return {
      publicKey: this.publicKey || defaultPublicKey,
      privateKey: this.privateKey || defaultPrivateKey,
    };
  }
}

export default new KeyStore();