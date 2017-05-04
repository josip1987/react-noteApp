import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin() {
        var {dispatch} = this.props;
        
        dispatch(actions.startLogin());
    },
    render() {
        return (
            <div>
                <h3 className="page-title">NoteApp</h3>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <p>Login with GitHub account:</p>
                            <button className="button" onClick={this.onLogin}>Login With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);