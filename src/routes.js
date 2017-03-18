import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {CharactersList, Comic, ComicsList, Index} from './containers';

const Dummy = (props) => (
  <div>{props.children}</div> 
);

export default (
  <Route path="/" component={Dummy}>
    <IndexRoute component={Index} />
    <Route path="comics" component={ComicsList} />
    <Route path="comic/:comicId" component={Comic} />
    <Route path="characters" component={CharactersList} />
    <Route path="character/:characterId" component={Dummy} />
  </Route>
);