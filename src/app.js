import React, { Component } from 'react';
import Router, { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import { NICE, SUPER_NICE } from './colors';

import Counter from './components/counter'
import LoginHandler from './components/login.js';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<RouteHandler/>, document.body);
});

export class App extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Handler/>
      </div>
    );
  }
}
