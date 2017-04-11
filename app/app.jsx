var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <h1>Boilerplate works!</h1>,
  document.getElementById('app')
);
