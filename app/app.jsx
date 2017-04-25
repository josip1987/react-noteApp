var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

//store.subscribe(() => {
//    console.log('New state', store.getState);
//});

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
