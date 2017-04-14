var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        
        if(todoText !== '') { 
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.handleSubmit} className="form">
                    <input type="text" ref="todoText" placeholder="Add Todo" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );  
    }
})

module.exports = AddTodo;