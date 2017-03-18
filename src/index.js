import React from 'react';
import {render} from 'react-dom';

import App from './App';

import './assets/stylesheets/_global.scss';

render(
  <App />,
  document.querySelector('.js-app')
);
