var React = require('react');
var { connect } = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass ({
    render: function() {
        var { todos, showCompleted, searchText } = this.props;
        var renderTodos = () => {
            var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
            
            if(filteredTodos.length === 0) {
                return (
                    <p className="container__message">No tasks</p>
                );
            }
            return filteredTodos.map((todo) => {
                return (
                    //add unique key prop to keep track of individual components
                    <Todo key={todo.id} {...todo} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );  
    }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);