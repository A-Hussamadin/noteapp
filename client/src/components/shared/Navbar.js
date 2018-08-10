import React, { Component } from 'react';
import {
    Menu,
} from 'semantic-ui-react'
import {
    withRouter
} from 'react-router-dom'

class Navbar extends Component {
    state = { isAuth: false }
    handleItemClick = (e, { name }) => { this.props.history.push(`/${name}`) }
    render() {
        return (
            <div>
                <Menu fixed='top' color='teal' inverted>
                    <Menu.Item as='a' header>
                        Note App
                        </Menu.Item>


                    {!this.state.isAuth
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

export default withRouter(Navbar);