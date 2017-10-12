/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class OrderStatus extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = {timeString: ''}
    }

    componentWillMount() {
        this._updateTimeString()
    }

    _updateTimeString() {
        const comment = this.props.comment;
        console.log(comment.createTime);
        const duration = (+Date.now() - comment.createTime) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createtime">
                    {this.state.timeString}
                </span>
            </div>
        )
    }
}

export default OrderStatus;