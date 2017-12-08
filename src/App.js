import React, { Component } from 'react';
// import axios from 'axios';

import logo from './assets/logo-small-2x.png';
import './App.css';
// import * as constants from '../src/constants';
import Shots from './components/shots';
import SignIn from './components/signIn';

class App extends Component {
  state = { showLogin: false }

  componentWillMount() {
    console.log(this.props.auth);
  }
  

  render() {
    return (
      <div className="app">
        { this.renderContent() }
      </div>
    );
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () =>  {
    this.props.auth.logout();
  }

  renderContent = () => {
    if (!this.props.auth) {
      return <div>
                  <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />

                    {/* <span className='menu-item' onClick={this.signIn}>Sign In / Sign Up</span> */}

                  </header>

                  <div className="app-tabs-area">
                    <h1 className="app-title">Shots</h1>
                  </div>

                  <div className="content">
                    <Shots />
                  </div>
              </div>
      ;
  } else {
    console.log('call login component');
    return <SignIn />
  }
}

signIn = () => {
  // let authUrl = '';
  // window.location = `${constants.AUTH_URL}?client_id=${constants.ACCESS_TOKEN}&redirect_uri=${constants.APP_URL}&scope=public+write&state=${constants.APP_STATE}`;
  this.setState({ showLogin: !this.state.showLogin });
}
}

export default App;
