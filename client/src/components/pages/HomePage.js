import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import {
    Container,
    Header
} from 'semantic-ui-react'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container text style={{ marginTop: '7em' }}>
                    <Header color='teal' as='h1'>Welcome to NoteApp</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>
                </Container>
            </div>
        );
    }
}

export default HomePage;