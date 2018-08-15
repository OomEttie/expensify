import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => {
      return isAuthenticated ? (
        <div>
          <Redirect to="/dashboard" />
        </div>
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = (state, props) => {
  return { isAuthenticated: !!state.auth.uid };
};

export default connect(mapStateToProps)(PublicRoute);

//
// component={props =>
//   isAuthenticated ? (
//     <div>
//       <Header />
//       <Component {...props} />
//     </div>
//   ) : (
//     <Redirect to="/" />
//   )
// }
// component: Component,
