/**
 * Created by 18829 on 2017/10/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        };

        constructor() {
            super();
            this.state = {allProps: {}}
        }

        componentWillMount() {
            const {store} = this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps())
        }

        _updateProps() {
            const {store} = this.context;
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {};
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {};
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            return <WrappedComponent {...this.setState.allProps} />
        }
    }

    return Connect
};

export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    };

    static childContextType = {
        store: PropTypes.object
    };

    getChildContexy() {
        return {
            store: this.props.store
        }
    }

    render() {
        <div>{this.props.children}</div>
    }
}
