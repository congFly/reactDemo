/**
 * Created by 18829 on 2017/10/12.
 */
import React, {Component} from 'react';

class Clock extends Component {

    //一般会把组件的 state 的初始化工作放在 constructor 里面去做
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

//在componentWillMount进行组件的启动工作，如 Ajax 数据拉取、定时器的启动
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }
//组件从页面上销毁的时候，有时候需要一些数据的清理，
//如定时器的清理，就会放在 componentWillUnmount 里面去做
    componentWillUnmount() {
        clearInterval(this.timer)
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