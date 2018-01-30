import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { UserManager } from 'oidc-client'

const userManagerConfig = {
  client_id: 'cortex',
  redirect_uri: 'http://localhost:3000',
  response_type: 'id_token token',
  scope: 'openid profile email tipid tipaa tipsds',
  authority: 'https://taxplatform-demo.deloitte.com/aa/idsrv',
  // silent_redirect_uri: ${window.location.protocol}//${window.location.hostname}${window.location.port ? :${window.location.port} : ''}/silent_renew.html,
  // automaticSilentRenew: true,
  // filterProtocolClaims: true,
  // loadUserInfo: true,
}

const userManager = new UserManager(userManagerConfig)

// export default userManagerConfig

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={userManager.signinRedirect}>LOGIN</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
