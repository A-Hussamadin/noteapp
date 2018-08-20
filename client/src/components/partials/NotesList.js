import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
import { deleteNote } from '../../actions/note';
class NotesList extends Component {
    state = {
        searchTerm: '',
        notes: []
    }

    onDeleteNote = (noteId) => {
        this.props.deleteNote(this.props.user, noteId);
    }
    resetComponent = () => this.setState({ searchTerm: '' })
    renderNotes = () => {

        if (this.state.notes.length === 0) {

            return (<Card style={{ marginTop: '1em' }}>
                <Card.Content>
                    <Card.Header>No Notes Found</Card.Header>

                </Card.Content>
            </Card>);
        } else {
            return this.state.notes.map((note) => {
                return <li key={note._id}><Note note={note} onDeleteNote={this.onDeleteNote} /></li>
            })

        }
    }
    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }


    componentWillReceiveProps(props) {

        this.setState({
            searchTerm: props.searchTerm,
            notes: props.notes
        });

        if (props.searchTerm.trim() === "") {

            return this.resetComponent()
        } else {

            const re = new RegExp(_.escapeRegExp(props.searchTerm), 'i')
            const isMatch = result => {
                return re.test(result.title) || re.test(result.text)
            }

            this.setState({
                notes: _.filter(this.props.notes, isMatch),
            })

        }
    }
    render() {

        return (
            <div>

                <ul>{this.renderNotes()}</ul>

            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        user: state.user,
        notes: state.notes
    };
}
export default connect(mapStateToProps, { deleteNote })(NotesList);