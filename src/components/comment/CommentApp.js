/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
//订单管理
import CommentInput from './CommentInput'
import CommentList from './CommentList'

//CommentInput 如何向 CommentApp 传递的数据？
// 父组件 CommentApp 只需要通过 props 给子组件 CommentInput 传入一个回调函数。
// 当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。
class Main extends Component {
    constructor() {
        super();
        //在 CommentApp 的 state 中初始化一个数组，来保存所有的评论数据，
        // 并且通过 props 把它传递给 CommentList
        this.state = {
            comments: []
        }
    }

    componentWillMount () {
        this._loadComments()
    }

    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }

    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment (comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({ comments });
        this._saveComments(comments);
    }

    render() {
        return (
            <div className='wrapper'>
                {/*父组件 CommentApp 只需要通过 props 给子组件 CommentInput 传入一个回调函数。*/}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default Main;
