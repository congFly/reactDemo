/**
 * Created by 18829 on 2017/10/12.
 */
import React, {Component} from 'react';


class AutoFocusInput extends Component {
    componentDidMount() {
        this.refs.input.focus()
    }

   /* componentDidMount() {
        this.input.focus()
    }*/

    render() {
        return (
            <input ref="input"/>
            /*<input ref={(input) => this.input = input} />*/
        )
    }
}

export default AutoFocusInput;