var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


var TodoApp = React.createClass ({
    render: function() {
        return (
            <div>
                <h3 className="page-title">Note App</h3>
                
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
});

module.exports = TodoApp;