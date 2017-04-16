var $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        
            // if JSON.parse fails because of invalid data
        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {
            //if it fails just stick with the default array
        }
            
            //just check if it's an array
        
        return $.isArray(todos) ? todos : [];
        
    }
};