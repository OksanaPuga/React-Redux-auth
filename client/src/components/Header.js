import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';


class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>Redux Auth</Link>
                {this.renderLinks()}
            </div>
        );
    }

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <Link to='/feature'>Feature</Link>
                    <Link to='/signout'>Sign Out</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/signin'>Sign In</Link>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);