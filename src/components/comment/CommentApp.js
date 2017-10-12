/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
//订单管理
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class Main extends Component {
    render() {
        return (
            <div className='wrapper'>
                <CommentInput />
                <CommentList/>
            </div>
        )
    }
}

export default Main;
