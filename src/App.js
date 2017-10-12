import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={Main}></Route>
                </Router>
            </div>
        );
    }
}

export default App;