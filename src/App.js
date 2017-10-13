import React, {Component} from 'react';
import './App.css';
import CommentApp from './components/comment/CommentApp';
import {HashRouter as Router, Route} from 'react-router-dom';


import Index from './components/comment/Index'
import Clock from './components/comment/Clock'
import Editor from './components/comment/Editor'
import AutoFocusInput from './components/comment/AutoFocusInput'
import IndexDemo from './components/comment/IndexDemo'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={IndexDemo}></Route>
                </Router>
            </div>
        );
    }
}

export default App;