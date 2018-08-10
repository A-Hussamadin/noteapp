import React, { Component } from 'react';
import SingupForm from '../forms/SingupForm';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import PropTypes from 'prop-types';
class SignupPage extends Component {
    submit = (data) => {
        // console.log(data);
        return this.props.signup(data).then(() => this.props.history.push("/dashboard"))
    }
    render() {
        return (
            <SingupForm submit={this.submit} />
        );
    }
}

export default connect(null, { signup })(SignupPage);