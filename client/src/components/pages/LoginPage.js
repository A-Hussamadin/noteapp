import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
class LoginPage extends Component {

    submit = (data) => {
        // console.log(data);
        return this.props.login(data).then(() => this.props.history.push("/dashboard"))
    } //
    render() {
        return (
            <LoginForm submit={this.submit} />
        );
    }
}
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);