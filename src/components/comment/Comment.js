/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';

class OrderStatus extends Component {

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default OrderStatus;