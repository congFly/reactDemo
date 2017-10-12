/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };

    constructor() {
        super();
        //在组件的构造函数中初始化一个 state 来保存用户名和评论内容两个状态：
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {   //判断 props 中是否传入了 onSubmit 属性,onSubmit从父组件传递过来的
            const {username, content} = this.state;
            this.props.onSubmit({username, content})   //用户输入的用户名和评论传入该函数
        }
        this.setState({content: ''})//通过 setState 清空用户输入的评论内容（但为了用户体验，保留输入的用户名）。
    }


    _saveUsername(username) {
        localStorage.setItem('username', username)
    }


    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
    }

    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({username})
        }
    }


//不依赖 DOM 操作的组件启动的操作都可以放在 componentWillMount 中进行
    componentWillMount() {
        this._loadUsername()
    }

    componentDidMount() {
        this.textarea.focus();
    }


    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onBlur={this.handleUsernameBlur.bind(this)}
                               onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}
                                  value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    {/*当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。*/}
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;