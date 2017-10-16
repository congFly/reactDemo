/**
 * Created by 18829 on 2017/10/13.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    };


    handleSwitchColor(color) {
        const {store} = this.context;
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }

    render() {
        return (
            <div>
                <button
                    style={{ color: this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    style={{ color: this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
};

// Header = connect(mapStateToProps)(ThemeSwitch);

export default connect(mapStateToProps)(ThemeSwitch);