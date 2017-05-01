import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'firebase';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        
        expect(res).toEqual(action);
    });
    
    it('should toggle completed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        
        expect(res).toEqual(action);
    });
    
    it('should generated add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: '123',
                text: 'text',
                completed: false,
                createdAt: 0
            }
        };
        var res = actions.addTodo(action.todo);
        
        expect(res).toEqual(action);
    });
    
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'Text';
        
        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
               text: todoText 
            });
            done();
        }).catch(done);
    });
    
    it('should generate add todos action object', () => {
        var todos = [{
            id: 111,
            text: 'text',
            completed: false,
            completedAt: undefined,
            createdAt: 123
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);
        
        expect(res).toEqual(action);
    });
    
    it('should generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 111,
            updates: {completed: false}
        };
        var res = actions.updateTodo(action.id, action.updates);
        
        expect(res).toEqual(action);
    });
    
    describe('tests with firebase todos', () => {
        var testTodoRef;
        
        beforeEach((done) => {
            testTodoRef = firebase.child('todos').push();
            
            testTodoRef.set({
               text: 'text',
               completed: false,
               createdAt: 123
            }).then(() => done());
        }); 
        
        afterEach((done) => {  
            testTodoRef.remove().then(() => done());  //cleanup
        });
        
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);
            
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                
                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                
                expect(mockActions[0].updates.completedAt).toExist();
                
                done();
                
            }, done); //if done is called without args mocha assumes it fails and prints err msg
        });
    });
});

