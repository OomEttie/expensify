import React from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//COMPONENTS
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={CreateExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
