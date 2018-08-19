import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
class NotesList extends Component {
    state = {
        searchTerm: '',
        notes: []
    }
    resetComponent = () => this.setState({ notes: this.props.notes.notes, searchTerm: '' })
    renderNotes = () => {

        if (this.state.notes.length === 0) {
            console.log("Result is 0");
            return (<Card style={{ marginTop: '1em' }}>
                <Card.Content>
                    <Card.Header>No Notes Found</Card.Header>

                </Card.Content>
            </Card>);
        } else {
            return this.state.notes.map((note) => {
                return <li key={note._id}><Note note={note} /></li>
            })

        }

        // console.log(this.props.notes)
        // this.props.notes.notes.map((note) => {
        //     console.log(note);
        // })
    }
    componentDidMount() {
        this.setState({ notes: this.props.notes.notes })
    }
    componentWillReceiveProps(props) {
        this.setState({
            searchTerm: props.searchTerm,
        });

        if (props.searchTerm.trim() == "") {

            return this.resetComponent()
        } else {

            const re = new RegExp(_.escapeRegExp(props.searchTerm), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                notes: _.filter(this.state.notes, isMatch),
            })

        }
    }
    render() {
        //console.log("noteslist ", this.props.searchTerm);

        return (
            <div>

                <ul>{this.renderNotes()}</ul>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        notes: state.notes,
    };
}
export default connect(mapStateToProps)(NotesList);