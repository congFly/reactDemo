/**
 * Created by 18829 on 2017/10/12.
 */
import React, {Component} from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
//像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}


export default Clock;