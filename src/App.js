import React, {Component} from 'react';
import './App.css';
import CommentApp from './components/comment/CommentApp';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={CommentApp}></Route>
                </Router>
            </div>
        );
    }
}

export default App;