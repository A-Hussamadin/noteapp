import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Menu,
} from 'semantic-ui-react'
import {
    withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
class Navbar extends Component {
    //  state = { isAuth: false }
    handleItemClick = (e, { name }) => {

        if (name === 'logout') {
            this.props.logout();
            this.props.history.push("/");

        } else {
            this.props.history.push(`/${name}`)
        }

    }
    render() {
        return (
            <div>
                <Menu fixed='top' color='teal' inverted>
                    <Menu.Item as='a' header>
                        Note App
                        </Menu.Item>


                    {!this.props.isAuthenticated
                        ?
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='login'
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='signup'
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                        : <Menu.Menu position='right'>
                            <Menu.Item
                                name='logout'
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    }

                </Menu>
            </div>
        );
    }
}

Navbar.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired
}
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}



export default withRouter(connect(mapStateToProps, { logout })(Navbar));