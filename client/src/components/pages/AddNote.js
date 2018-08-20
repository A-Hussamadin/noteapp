import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Grid, Form, Container, TextArea, Button, Header, Divider, Input } from 'semantic-ui-react';

import '../../styles/style.css';
import { connect } from 'react-redux';
import { addNote } from '../../actions/note'
class AddNote extends Component {

    state = {
        title: '',
        text: ''
    }

    onAddNote = () => {
        const note = {
            title: this.state.title,
            text: this.state.text
        }

        this.props.addNote(this.props.user, note).then(() => this.props.history.push("/dashboard"))
    }
    onTextChange = (e, { value }) => {

        this.setState({ text: value })
    }
    onTitleChange = (e, { value }) => {

        this.setState({ title: value })
    }
    render() {


        return (
            <div>
                <Navbar />

                <Container style={{ marginTop: '5em' }}>
                    <Grid >
                        <Grid.Column width={13}>
                            <Header as='h1'>
                                Add New Note
                                </Header>
                        </Grid.Column>
                        <Grid.Column floated='right' width={3}>
                            <Button
                                color="green"
                                content='Save'
                                icon='save'
                                labelPosition='right'
                                onClick={this.onAddNote}
                            />
                        </Grid.Column>
                    </Grid>
                    <Divider />
                    <Form>
                        <Form.Field control={Input}
                            label='Note Title'
                            placeholder='Untitled Note'
                            onChange={this.onTitleChange}
                            value={this.state.title}
                        />

                        <Form.Field control={TextArea}
                            label='Note Text'
                            placeholder='Note Text...'
                            onChange={this.onTextChange}
                            value={this.state.text}
                        />
                    </Form>
                </Container>



            </div >
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    };
}


export default connect(mapStateToProps, { addNote })(AddNote);