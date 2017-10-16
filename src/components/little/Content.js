/**
 * Created by 18829 on 2017/10/13.
 */
import React, {Component} from 'react'
import {connect} from './react-redux'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
};
// Content = connect(mapStateToProps)(Content);

export default connect(mapStateToProps)(Content);