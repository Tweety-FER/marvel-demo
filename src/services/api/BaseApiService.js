import md5 from 'js-md5';

export default class BaseApiService {
  baseUrl = 'http://gateway.marvel.com/v1/public/';

  processResponse(response) {
    return new Promise((resolve) => response.json()
      .then((json) => resolve({
        status: response.status,
        ok: response.ok,
        statusText: response.statusText,
        json,
      }))
      .catch((err) => resolve({
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        json: null,
      }))
    ).then((response) => {
      if (response.ok) {
        return response;
      }

      throw response;
    });
  }

  fetch(resourcePath, keys, searchQuery) {
    const queryParams = this.getQueryParams(keys, searchQuery);
    const url = `${this.baseUrl}${resourcePath}?${queryParams}`;

    return fetch(url)
      .then(this.processResponse.bind(this));
  }

  getQueryParams(keys, query = {}) {
    const timestamp = String(Date.now());
    const hash = md5(timestamp + keys.privateKey + keys.publicKey);

    const params = {
      ts: timestamp,
      apikey: keys.publicKey,
      hash,
      ...query
    };

    return Object.keys(params).map((key) => (
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )).join('&');
  }
}