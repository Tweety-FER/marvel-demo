import React from 'react';
import {Route, IndexRoute} from 'react-router';

const Dummy = (props) => (
  <span>Hello world!</span> 
);

export default (
  <Route path="/" component={Dummy}>
    <IndexRoute component={Dummy} />
    <Route path="comics" component={Dummy} />
    <Route path="comic/:id" component={Dummy} />
    <Route path="characters" component={Dummy} />
    <Route path="character/:id" component={Dummy} />
  </Route>
);