import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {CharactersList, ComicsList, Index} from './containers';

const Dummy = (props) => (
  <div>{props.children}</div> 
);

export default (
  <Route path="/" component={Dummy}>
    <IndexRoute component={Index} />
    <Route path="comics" component={ComicsList} />
    <Route path="comic/:id" component={Dummy} />
    <Route path="characters" component={CharactersList} />
    <Route path="character/:id" component={Dummy} />
  </Route>
);