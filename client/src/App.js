import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute';
import AddNote from './components/pages/AddNote';
import PropTypes from 'prop-types';


const App = ({ location }) => (<div className="ui container">
  <Route path="/" exact location={location} component={HomePage} />
  <Route path="/confirmation/:token" exact location={location} component={ConfirmationPage} />
  <GuestRoute path="/login" exact location={location} component={LoginPage} />
  <GuestRoute path="/signup" exact location={location} component={SignupPage} />
  <UserRoute path="/dashboard" exact location={location} component={DashboardPage} />
  <UserRoute path="/addNote" exact location={location} component={AddNote} />
  <UserRoute path="/edit/:id" exact location={location} component={AddNote} />
</div>)

App.prototypes = {
  loaction: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
