import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { Grid, Container, Header, Button, Divider, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchNots } from '../../actions/note';
import NotesList from '../partials/NotesList';

import '../../styles/style.css'
class DashboardPage extends Component {
    state = {
        isLoading: true,
        searchTerm: ''
    }
    componentDidMount() {
        this.props.fetchNots(this.props.user).then(() => {
            this.setState({ isLoading: false });
        })
    }

    onSearchChange = (e, { value }) => {
        this.setState({ searchTerm: value });


    }

    onAddNote = () => {
        this.props.history.push("/addNote")
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    Loading;
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar />

                    <Container style={{ marginTop: '5em' }}>
                        <Grid >
                            <Grid.Column width={9}>
                                <Header as='h1'>
                                    Welcome to Note App
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Search
                                    onSearchChange={this.onSearchChange}
                                    value={this.state.searchTerm}
                                    showNoResults={false}
                                />
                            </Grid.Column>
                            <Grid.Column floated='right' width={3}>
                                <Button
                                    color="green"
                                    content='Add Note'
                                    icon='add'
                                    labelPosition='right'
                                    onClick={this.onAddNote}
                                />
                            </Grid.Column>
                        </Grid>
                        <Divider />
                        <Grid centered>
                            <NotesList searchTerm={this.state.searchTerm} />
                        </Grid>
                    </Container>
                </div>
            );
        }

    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchNots: user => dispatch(fetchNots(user))
    };
}
function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);