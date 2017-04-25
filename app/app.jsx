var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState);
});

store.dispatch(actions.addTodo('clean the cat'));
store.dispatch(actions.setSearchText('cat'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
