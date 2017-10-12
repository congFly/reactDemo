/**
 * Created by 18829 on 2017/10/12.
 */
import React, {Component} from 'react';
import Header from './Header'
import Clock from './Clock'
class Index extends Component {
    constructor() {
        super();
        this.state = {isShowClock: true}
    }


    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>show or hide</button>
            </div>
        )
    }
}


export default Index;