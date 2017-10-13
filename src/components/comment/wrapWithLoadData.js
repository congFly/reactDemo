/**
 * Created by 18829 on 2017/10/13.
 */

import React, {Component} from 'react';
export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {date: null}
        }

        componentWillMount() {
            let data = localStorage.getItem(name);
            this.setState({data})
        }

        render() {
            return <WrappedComponent data={this.state.date}/>
        }
    }
    return NewComponent;
}