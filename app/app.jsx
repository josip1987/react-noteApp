var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');
import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp} />
            <IndexRoute component={Login} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
