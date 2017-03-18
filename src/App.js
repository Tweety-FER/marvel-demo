import React from 'react';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';

import routes from './routes';
import store from './store';
import {Header} from './components';

const App = () => (
  <Provider {...store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

export default App;