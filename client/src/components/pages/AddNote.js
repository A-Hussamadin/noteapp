import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Grid, Form, Container, TextArea, Button, Header, Divider, Input } from 'semantic-ui-react';

import '../../styles/style.css';
import { connect } from 'react-redux';
import { addNote, getNote, updateNote } from '../../actions/note'
class AddNote extends Component {

    state = {
        title: '',
        text: '',
        disabled: true,
    }

    onAddNote = () => {
        const note = {
            title: this.state.title,
            text: this.state.text
        }
        if (this.props.match.params.id) {
            //call update 
            note._id = this.props.match.params.id;
            this.props.updateNote(this.props.user, note).then(() => this.props.history.push("/dashboard"))
        } else {
            this.props.addNote(this.props.user, note).then(() => this.props.history.push("/dashboard"))
        }

    }
    onCancel = () => {
        this.props.history.push("/dashboard");
    }
    onTextChange = (e, { value }) => {

        this.setState({
            text: value,
            disabled: false
        })
    }
    onTitleChange = (e, { value }) => {

        this.setState({ title: value, disabled: false })
    }

    componentDidMount() {

        if (this.props.match.path === "/edit/:id") {


            this.props.getNote(this.props.user, this.props.match.params.id).then(() => {


                this.setState({
                    title: this.props.note.title,
                    text: this.props.note.text,

                })


            })
        }
    }


    render() {


        return (
            <div>
                <Navbar />

                <Container style={{ marginTop: '5em' }}>
                    <Grid >
                        <Grid.Column width={10}>
                            {this.props.match.params.id
                                ? <Header color='teal' as='h1'>
                                    Edite Note
                        </Header>
                                :
                                <Header color='teal' as='h1'>
                                    Add Note
                        </Header>
                            }

                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Button
                                color="green"
                                content='Save'
                                icon='save'
                                labelPosition='right'
                                {...this.state}
                                floated='right'
                                onClick={this.onAddNote}
                            />
                            <Button
                                color="red"
                                content='Cancel'
                                icon='cancel'
                                labelPosition='right'
                                floated='right'
                                onClick={this.onCancel}
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
function mapStateToProps(state, ownProps) {
    if (ownProps.match.params.id) {
        return {
            user: state.user,
            note: state.notes[0]
        };

    } else {
        return {
            user: state.user,
        };
    }

}


export default connect(mapStateToProps, { addNote, getNote, updateNote })(AddNote);