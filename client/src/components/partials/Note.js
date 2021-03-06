import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import {
    withRouter
} from 'react-router-dom'

class Note extends Component {

    onEditClick = () => {
        this.props.history.push(`/edit/${this.props.note._id}`);
    }
    onDeleteClick = () => {
        this.props.onDeleteNote(this.props.note._id);
    }
    render() {
        const note = this.props.note;

        return (
            <Card style={{ marginTop: '1em' }}>
                <Card.Content>
                    <Card.Header>{note.title}</Card.Header>
                    <Card.Meta>created: {new Intl.DateTimeFormat('en-US')
                        .format(note.createdAt)}
                    </Card.Meta>
                    <Card.Description>
                        {note.text}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button icon color='green' onClick={this.onEditClick}>
                        <Icon name='edit' />

                    </Button>

                    <Button icon color='red' onClick={this.onDeleteClick}>
                        <Icon name='trash' />

                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

export default withRouter(Note);