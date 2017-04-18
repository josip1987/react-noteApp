var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    
   it('should call onAddTodo if field is not empty', () => {
       var todoText = 'Check';
       var spy = expect.createSpy();
       var todoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
       var $el = $(ReactDOM.findDOMNode(todoForm));
        
       todoForm.refs.todoText.value = todoText;
       TestUtils.Simulate.submit($el.find('form')[0]);
        
       expect(spy).toHaveBeenCalledWith(todoText);
    });
    
    it('should NOT call onAddTodo if field is empty', () => {
       var todoText = '';
       var spy = expect.createSpy();
       var todoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
       var $el = $(ReactDOM.findDOMNode(todoForm));
        
       todoForm.refs.todoText.value = todoText;
       TestUtils.Simulate.submit($el.find('form')[0]);
        
       expect(spy).toNotHaveBeenCalled();
    });
});