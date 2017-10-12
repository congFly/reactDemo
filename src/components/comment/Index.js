/**
 * Created by 18829 on 2017/10/12.
 */
import React, {Component} from 'react';
import Header from './Header'
class Index extends Component {
    constructor() {
        super();
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowHeader ? <Header/> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>show or hide</button>
            </div>
        )
    }
}


export default Index;