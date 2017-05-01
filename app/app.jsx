var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');


// only for local storage, change to firebase, login with github

//store.subscribe(() => {
//    var state = store.getState();
//    console.log('New state', state);
//    TodoApi.setTodos(state.todos);
//});

//var initialTodos = TodoApi.getTodos();
//store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

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
