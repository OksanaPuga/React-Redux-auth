import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => ({
        authenticated: state.auth.authenticated
    });

    return connect(mapStateToProps)(ComposedComponent);
}