import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions';

class Signup extends React.Component {
    onSubmit = formValues => {
        this.props.authUser(formValues, () => {
            this.props.history.push('/feature');
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email:</label>
                    <Field
                        name='email'
                        type='text'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <Field
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset>
                <button>Submit</button>
                <br />
                <br />
                <div style={{ color: 'red' }}>{this.props.errorMessage}</div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
})

export default compose(
    reduxForm({ form: 'signup' }),
    connect(mapStateToProps, actions)
)(Signup);