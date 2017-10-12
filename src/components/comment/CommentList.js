/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default CommentList;