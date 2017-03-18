import React from 'react';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';

import routes from './routes';
import store from './store';
import {Header} from './components';

const App = () => (
  <Provider {...store}>
    <div>
      <Header keys={store.keys} />
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>
);

export default App;