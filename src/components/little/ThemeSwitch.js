/**
 * Created by 18829 on 2017/10/13.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class ThemeSwitch extends Component {

    static propsTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    };


    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button
                    style={{color: this.state.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red
                </button>
                <button
                    style={{color: this.state.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
};

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

