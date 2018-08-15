import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact activeClassName="isActive" to="/dashboard">
        Dashboard
      </NavLink>
      |
      <NavLink exact activeClassName="isActive" to="/create">
        Create Expense
      </NavLink>
      |
      <NavLink exact activeClassName="isActive" to="/help">
        Help
      </NavLink>
      <button onClick={startLogOut}>Log Out</button>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogOut: () => {
      dispatch(startLogOut());
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

// <NavLink exact activeClassName="isActive" to="/broken">
// Broken
// </NavLink>
