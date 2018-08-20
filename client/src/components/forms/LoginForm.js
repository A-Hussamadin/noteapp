import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import { login_API } from '../../api';
import Validator from 'validator';
import PropTypes from 'prop-types';

class LoginForm extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {},
        errorLogging: false
    }
    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.submit(this.state.data)
                .catch(err => this.setState({ errorLogging: true, loading: false })

                );
        }
        //  login_API(this.state.data);

    }

    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Password Can't be blank";
        return errors
    }
    errorMessage = () => {
        console.log(this.state.errorLogging);
        if (this.state.errorLogging) {
            return (<Message negative>
                <Message.Header>Wrong Email or password</Message.Header>
            </Message>);
        }
    }
    render() {
        const { data, errors, loading } = this.state;

        return (
            <div className='login-form'>
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>

                        {this.errorMessage()}

                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form onSubmit={this.onSubmit} size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid icon='user'
                                    iconPosition='left'
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='E-mail address'
                                    value={data.email}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    value={data.password}
                                    onChange={this.onChange}
                                />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Link to='/signup'>Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default LoginForm;