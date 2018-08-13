import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact activeClassName="isActive" to="/">
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
      |
    </header>
  );
};

export default Header;

// <NavLink exact activeClassName="isActive" to="/broken">
// Broken
// </NavLink>
