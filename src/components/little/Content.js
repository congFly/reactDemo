/**
 * Created by 18829 on 2017/10/13.
 */
import React, {Component} from 'react'
import {connect} from './react-redux'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

/*    constructor() {
        super()
        this.state = {themeColor: ''}
    }

    componentWillMount() {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const {store} = this.context
        const state = store.getState()
        this.setState({themeColor: state.themeColor})
    }*/

    render() {
        return (
            <div>
                <p style={{color: this.state.themeColor}}>React.js 小书内容</p>
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

Header = connect(mapStateToProps)(Content);

export default Content