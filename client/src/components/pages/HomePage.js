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
                    <p>This is a cross devices Note APP.</p>
                    <p>
                        Where you can add edit your notes from web and mobile.
                    </p>
                </Container>
            </div>
        );
    }
}

export default HomePage;