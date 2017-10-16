/**
 * Created by 18829 on 2017/10/13.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

/*    constructor() {
        super();
        this.state = {themeColor: ''}
    }

    componentWillMount() {
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const {store} = this.context;
        const state = store.getState();
        console.log(state)
        this.setState({themeColor: state.themeColor})
    }*/


    render() {
        return (
            <h1 style={{color: this.state.themeColor}}>React.js 小书</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
};

// Header = connect(mapStateToProps)(Header);

export default connect(mapStateToProps)(Header);