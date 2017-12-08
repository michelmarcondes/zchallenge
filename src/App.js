import React, { Component } from 'react';
// import axios from 'axios';

import logo from './assets/logo-small-2x.png';
import './App.css';
// import * as constants from '../src/constants';
import Shots from './components/shots';
// import SignIn from './components/signIn';

class App extends Component {
  state = {
    showLogin: false,
    shotSize: 'default',
    defaultIconClass: 'iconSelected',
    smallIconClass: 'icon',
  }



  render() {
    return (
      <div className="app">
        {this.renderContent()}
      </div>
    );
  }

  renderContent = () => {
    // if (!this.state.showLogin) {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          {/* <span className='menu-item' onClick={this.signIn}>Sign In / Sign Up</span> */}
        </header>

        <div className="app-tabs-area">
          <h1 className="app-title">Shots</h1>
          <div className='menu-item-icons-wrapper'>
            <a onClick={() => this.changeShotSize('default')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="72" 
                height="72" 
                viewBox="0 0 72 72" 
                className={this.state.defaultIconClass} 
                alt="Small with meta"
              >
                <title id="3uk0aqv8ms3dxa5enlm7jvk9fze7bwr">Small with meta</title>
                <path d="M49 53L23 53C21 53 20 52 20 50L20 22C20 20 21 19 23 19L49 19C51 19 52 20 52 22L52 50C52 52 51 53 49 53L49 53 49 53ZM28 48L44 48C45 48 46 47 46 46 46 45 45 44 44 44L28 44C27 44 26 45 26 46 26 47 27 48 28 48L28 48 28 48ZM46 25L26 25 26 39 46 39 46 25 46 25Z" fill="#333333"></path>
              </svg>
            </a>
            <a onClick={() => this.changeShotSize('small')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="72" 
                height="72" 
                viewBox="0 0 72 72" 
                className={this.state.smallIconClass}
              >
                <title id="gsy5krc808joz371elntz9n8rg8x1yk">Small without meta</title>
                <path d="M49 49L23 49C21 49 20 48 20 46L20 26C20 24 21 23 23 23L49 23C51 23 52 24 52 26L52 46C52 48 51 49 49 49L49 49ZM46 29L26 29 26 43 46 43 46 29 46 29Z" fill="#333333"></path>
              </svg>

            </a>
          </div>
        </div>

        <div className="content">
          <Shots shotSize={this.state.shotSize} />
        </div>
      </div>
    );
    // } else {
    //   console.log('call login component');
    //   return <SignIn />
    // }
  }

  changeShotSize = (shotSize) => {
    this.setState({ shotSize });

    if (shotSize === 'default') {
      this.setState({ defaultIconClass: 'iconSelected', smallIconClass: 'icon' });
      return;
    }

    this.setState({ defaultIconClass: 'icon', smallIconClass: 'iconSelected' });
  }

  // signIn = () => {
  //   // let authUrl = '';
  //   // window.location = `${constants.AUTH_URL}?client_id=${constants.ACCESS_TOKEN}&redirect_uri=${constants.APP_URL}&scope=public+write&state=${constants.APP_STATE}`;
  //   this.setState({ showLogin: !this.state.showLogin });
  // }
}

export default App;
