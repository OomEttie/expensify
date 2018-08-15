import React from 'react';
import Header from './Header';

export default class BoilerplateApp extends React.Component {
  state = {
  };

  //FUNCTIONS
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// 
// REDUX CONNECTED
//
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <p>This is the Login Page</p>
        <Link to="/dashboard">go to dashboard!</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(LoginPage);
