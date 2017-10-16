/**
 * Created by 18829 on 2017/10/16.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from './react-redux'
import Header from './Header'
import Content from './Content'

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener())
    };
    dispatch({}); // 初始化 state
    return {getState, dispatch, subscribe}
}

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    };
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        default:
            return state
    }
};

const store = createStore(themeReducer);

class Index extends Component {

    //现在我们把 store 放到 Index 的 context 里面，这样每个子组件都可以获取到 store 了，
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {store}
    }

    render() {
        return (
            <div>
                <Provider>
                    <Header />
                    <Content />
                </Provider>
            </div>
        )
    }
}


export default Index;