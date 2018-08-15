import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" exact to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button className="button__link" onClick={startLogOut}>Logout</button>
        </div>
      </div>
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
